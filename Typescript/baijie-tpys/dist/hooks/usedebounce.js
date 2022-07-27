import { useEffect, useState } from "react";
var useDebounce = function (value, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = useState(value), debvalue = _a[0], setdebvalue = _a[1];
    useEffect(function () {
        var timer = setTimeout(function () {
            setdebvalue(value);
        }, delay);
        return function () {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debvalue;
};
export default useDebounce;
