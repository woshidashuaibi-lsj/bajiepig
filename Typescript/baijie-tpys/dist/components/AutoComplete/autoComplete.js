var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect, useRef, } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import Input from "../Input/input";
import classNames from "classnames";
import Icon from "../Icon/icon";
import useDebounce from "../../hooks/usedebounce";
import Transition from "../Transition/transition";
export var AutoComplete = function (props) {
    var fetchSuggestions = props.fetchSuggestions, onSelect = props.onSelect, value = props.value, renderOption = props.renderOption, restProps = __rest(props, ["fetchSuggestions", "onSelect", "value", "renderOption"]);
    var _a = useState(value), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState(false), showDropdown = _b[0], setShowDropdown = _b[1];
    var triggerSearch = useRef(false);
    var _c = useState([]), suggestions = _c[0], setSugestions = _c[1];
    var componentRef = useRef(null);
    useClickOutside(componentRef, function () {
        setSugestions([]);
    });
    var _d = useState(false), loading = _d[0], setLoading = _d[1];
    var _e = useState(-1), highlightIndex = _e[0], setHighlightIndex = _e[1];
    var debouncedValue = useDebounce(inputValue, 300);
    console.log(suggestions);
    useEffect(function () {
        if (debouncedValue && triggerSearch.current) {
            setSugestions([]);
            var results = fetchSuggestions(debouncedValue);
            if (results instanceof Promise) {
                setLoading(true);
                results.then(function (data) {
                    setLoading(false);
                    setSugestions(data);
                    if (data.length > 0) {
                        setShowDropdown(true);
                    }
                });
            }
            else {
                setSugestions(results);
                setShowDropdown(true);
                if (results.length > 0) {
                    setShowDropdown(true);
                }
            }
        }
        else {
            setSugestions([]);
        }
        setHighlightIndex(-1);
    }, [debouncedValue]);
    var highlight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length) {
            index = suggestions.length - 1;
        }
        setHighlightIndex(index);
    };
    var handleKeyDown = function (e) {
        console.log(e.key);
        console.log(e);
        switch (e.keyCode) {
            case 13:
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex]);
                }
                break;
            case 38:
                highlight(highlightIndex - 1);
                break;
            case 40:
                highlight(highlightIndex + 1);
                break;
            case 27:
                setShowDropdown(false);
                break;
            default:
                break;
        }
    };
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    };
    var handleSelect = function (item) {
        setInputValue(item.value);
        setShowDropdown(false);
        if (onSelect) {
            onSelect(item);
        }
        triggerSearch.current = false;
    };
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item;
    };
    var generateDropdown = function () {
        return (React.createElement(Transition, { in: showDropdown || loading, animation: "zoom-in-top", timeout: 300 },
            React.createElement("ul", { className: "viking-suggestion-list" },
                loading && (React.createElement("div", { className: "suggstions-loading-icon" },
                    React.createElement(Icon, { icon: "spinner", spin: true }))),
                suggestions.map(function (item, index) {
                    var cnames = classNames("suggestion-item", {
                        "is-active": index === highlightIndex,
                    });
                    return (React.createElement("li", { key: index, className: cnames, onClick: function () { return handleSelect(item); } }, renderTemplate(item)));
                }))));
    };
    return (React.createElement("div", { className: "viking-auto-complete", ref: componentRef },
        React.createElement(Input, __assign({ value: inputValue, onKeyDown: handleKeyDown }, restProps, { onChange: handleChange })),
        loading && (React.createElement("div", { className: "suggstions-loading-icon" },
            React.createElement(Icon, { icon: "spinner", spin: true }),
            "loading")),
        (suggestions === null || suggestions === void 0 ? void 0 : suggestions.length) > 0 && generateDropdown()));
};
export default AutoComplete;
