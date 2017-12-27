import * as React from "react";
import * as Classnames from "classnames";
import { ILinkboxProps, ILinkboxState } from "../interfaces";

export class Linkbox extends React.Component<ILinkboxProps, ILinkboxState>
{
    constructor(props: ILinkboxProps)
    {
        super(props);

        this.state = {
            title: "React - A JavaScript library for building user interfaces",
            description: "A JavaScript library for building user interfaces",
            image: "https://reactjs.org/logo-og.png"
        };
    }

    render()
    {
        const style = {
            backgroundImage: `url(${this.state.image})`
        }

        const outerClasses = Classnames("rt-linkbox", this.props.className)

        return (
            <a className={outerClasses} href={this.props.url}>
                <div className="rt-linkbox-img" style={style}></div>
                <div className="rt-linkbox-text">
                    <p className="rt-linkbox-title">{this.state.title}</p>
                    <p className="rt-linkbox-description">{this.state.description}</p>
                </div>
            </a>
        )
    }
}