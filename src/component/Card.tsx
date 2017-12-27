import * as React from "react";
import { Tag } from "./Tag";
import { Author } from "./Author";
import { Linkbox } from "./Linkbox";
import { ICardProps } from "../interfaces";

export class Card extends React.Component<ICardProps>
{
    render ()
    {
        // const tags = [
        //     { text: "Introduction", color: "#899CFC" }, 
        //     { text: "Reactest Basics", color: "#1CBBB4" },
        //     { text: "Getting started", color: "#E95A7D" }
        // ].map((tag) => <li className="rt-card-tag-item"><Tag text={ tag.text } color={ tag.color } /></li>);
        // <ul className="rt-card-tag-list">{ tags }</ul>

        return (
            <div className="rt-card">
                <h2 className="rt-card-title">{this.props.title}</h2>
                <Author name={this.props.author} date={this.props.date} className="rt-card-author" />

                <div>{this.props.content}</div>

                {/* <div className="rt-card-attachments">
                    <Linkbox url="https://google.fr" className="rt-card-attachments-item"/>
                    <Linkbox url="https://google.fr" className="rt-card-attachments-item"/>
                    <Linkbox url="https://google.fr" className="rt-card-attachments-item"/>
                </div> */}
            </div>
        )
    }
}