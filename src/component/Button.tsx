import * as React from "react";
import * as Classnames from "classnames";
import { IButtonProps } from "../interfaces";

export class Button extends React.Component<IButtonProps>
{
    render()
    {
        const outerClasses = Classnames("rt-button",
                                        this.props.primary ? "rt-primary" : "",
                                        this.props.warning ? "rt-warning" : "",
                                        this.props.danger ? "rt-danger" : "",
                                        this.props.success ? "rt-success" : "",
                                        this.props.className);

        return (
            <button className={outerClasses} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}