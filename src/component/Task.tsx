import * as React from "react";
import * as classnames from "classnames";
import { ITaskProps } from "../interfaces";

const checkbox = require("../asset/checkbox-unticked.svg");

export class Task extends React.Component<ITaskProps>
{
    render()
    {
        let outerClasses = classnames("rt-task", this.props.className);
        console.log(checkbox);

        return (
            <span className={outerClasses}>
            { checkbox }
                <span className="rt-checkbox-box">
                    <input type="checkbox" id="rt-task-checkbox" />
                </span>
                <label className="rt-checkbox-text" htmlFor="rt-task-checkbox">{this.props.text}</label>
            </span>
        )
    }
}