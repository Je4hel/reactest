import * as React from "react";
import * as Moment from "moment";
import { IAuthorProps } from "../interfaces";

let classnames = require("classnames");

export class Author extends React.Component<IAuthorProps>
{
    render()
    {
        const outerClasses = classnames("rt-author", this.props.className);

        return (
            <span className={outerClasses}>
                {this.props.name} on {Moment(this.props.date).format("LL")} at {Moment(this.props.date).format("LT")}
            </span>
        )
    }
}