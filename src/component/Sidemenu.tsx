import * as React from "react";
import * as Classnames from "classnames";
import { ISidemenuProps } from "../interfaces";

export class Sidemenu extends React.Component<ISidemenuProps>
{
    render()
    {
        const outerClasses = Classnames("rt-sidemenu", this.props.className);
        
        return (
            <div className={outerClasses}>
                { this.props.title != undefined &&
                    <h2>{this.props.title}</h2>
                }

                {this.props.children}
            </div>
        )
    }
}