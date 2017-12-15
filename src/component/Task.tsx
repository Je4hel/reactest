import * as React from "react";
import { ITaskProps } from "../interfaces";

let classnames = require("classnames");

export class Task extends React.Component<ITaskProps>
{
    render()
    {
        let outerClasses = classnames("rt-task", this.props.className);
        const checkbox = require("svg-inline-loader!../asset/ticked.svg");

        return (
            <span className={outerClasses}>
                <span className="rt-checkbox-box">
                    <input type="checkbox" id="rt-task-checkbox" />
                    <svg height="50px" dangerouslySetInnerHTML={{__html: checkbox}}></svg>
                </span>
                <label className="rt-checkbox-text" htmlFor="rt-task-checkbox">{this.props.text}</label>
            </span>
        )
    }
}