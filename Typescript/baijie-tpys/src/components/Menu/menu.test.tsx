import React from "react";
import { render,RenderResult } from "@testing-library/react";

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}
const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode:'vertical'
}
const generateMenu = (props) => {
    return (
        <Menu {...props}>
            <MenuItem index={0}>
                active
            </MenuItem>
            <MenuItem disabled index={1}>
                disabled
            </MenuItem>
            <MenuItem index={2}>
                xyz
            </MenuItem>
        </Menu>
    )
 }
let wrapper:RenderResult , menuElement:HTMLElement ,activeElement, disabledElement
describe('test Menu and MenuItem compnent ', () => {
    beforeEach(() => { 
        wrapper = render(generateMenu(testProps))
    })
    it('should render correct Menu and MenuItem based on default props', () => { 

    })
    it('click items should change active and call the right callback', () => { 

    })
    it('should render vertical mode when mode is set to vertical', () => { 

    })
})