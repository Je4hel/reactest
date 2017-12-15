import * as React from "react";
import { ICheckboxProps } from "../interfaces";

let classnames = require("classnames");

export class Checkbox extends React.Component<ICheckboxProps>
{
    render()
    {
        const outerClasses = classnames("rt-checkbox", this.props.className);
        return (
            <input type="checkbox" className={outerClasses} />
        )
    }
}