import * as React from "react";
import { ITagProps } from "../interfaces";

let classnames = require("classnames");

export class Tag extends React.Component<ITagProps>
{
    render()
    {
        const style = {
            borderColor: this.props.color != undefined ? this.props.color : "",
            color: this.props.color != undefined ? this.props.color : ""
        };

        const outerClasses = classnames("rt-tag", this.props.className);

        return (
            <span className={outerClasses} style={ style } title={this.props.text}>{ this.props.text }</span>
        )
    }
}