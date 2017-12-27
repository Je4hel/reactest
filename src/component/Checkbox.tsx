import * as React from "react";
import * as Classnames from "classnames";
import { ICheckboxProps } from "../interfaces";

export class Checkbox extends React.Component<ICheckboxProps>
{
    render()
    {
        const outerClasses = Classnames("rt-checkbox", this.props.className);
        return (
            <input type="checkbox" className={outerClasses} />
        )
    }
}