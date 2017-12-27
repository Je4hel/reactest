import * as React from "react";
import * as Moment from "moment";
import { IAuthorProps } from "../interfaces";

let classnames = require("classnames");

export class Author extends React.Component<IAuthorProps>
{
    render()
    {
        const outerClasses = classnames("rt-author", this.props.className);
        
        let content = null;
        if (this.props.name != undefined && this.props.date != undefined)
        {
            content = <span>{this.props.name} on {Moment(this.props.date).format("LL")} at {Moment(this.props.date).format("LT")}</span>
        }
        else if (this.props.name != undefined)
        {
            content = <span>{this.props.name}</span>
        }
        else if (this.props.date != undefined)
        {
            content = <span>{Moment(this.props.date).format("LL")} at {Moment(this.props.date).format("LT")}</span>
        }

        return (
            <span className={outerClasses}>
                {content}
            </span>
        )
    }
}