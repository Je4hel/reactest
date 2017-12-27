import * as React from "react";
import * as Classnames from "classnames";

import { ICardProps, ICardState } from "../interfaces";

import { Tag } from "./Tag";
import { Author } from "./Author";
import { Linkbox } from "./Linkbox";
import { Button } from "./Button";
import { CardModel } from "../model/CardModel";

enum FormInputs 
{
    Title = "Title",
    Content = "Content"
}

export class Card extends React.Component<ICardProps, ICardState>
{
    constructor(props: ICardProps)
    {
        super(props);
        this.state = {
            title: this.props.title,
            content: this.props.content,
            author: this.props.author,
            date: this.props.date,
            tags: this.props.tags
        };
    }

    render ()
    {
        const outerClasses = Classnames("rt-card",
                                        this.props.isEditing ? "rt-card-editmode" : "",
                                        this.props.className);

        let title = null;
        let content = null;
        let actions = null;

        if (this.props.isEditing)
        {
            title = <input type="text" defaultValue={this.props.title} placeholder="Title" name={FormInputs.Title} onChange={this.handleInputChange}/>;
            content = <textarea defaultValue={this.props.content} name={FormInputs.Content} onChange={this.handleInputChange}></textarea>
            actions =
                <div className="rt-card-actions">
                    <Button danger className="rt-card-action" onClick={this.props.onDismissChanges}>Dismiss</Button>
                    <Button primary success className="rt-card-action" onClick={this.saveChanges}>Save changes</Button>
                </div>;
        }
        else
        {
            title = this.props.title;
            content = <div>{this.props.content}</div>;
            actions = 
                <div className="rt-card-actions">
                    <Button className="rt-card-action" onClick={this.saveChanges}>Edit</Button>
                </div>;
        }

        return (
            <div className={outerClasses}>
                <div className="rt-card-banner"></div>
                <div className="rt-card-header">
                    <div className="rt-card-info">
                        <h2>{title}</h2>
                        <Author name={this.props.author} date={this.props.date} className="rt-card-author" />
                    </div>

                    {actions}
                </div>

                {content}
            </div>
        );
    }

    handleInputChange = (event: any) =>
    {
        if (event.target.name == FormInputs.Title)
        {
            this.setState({
                title: event.target.value
            });
        }
        else if (event.target.name == FormInputs.Content)
        {
            this.setState({
                content: event.target.value
            });
        }
    }

    saveChanges = (event: any) =>
    {
        if (this.props.onSaveChanges != undefined)
        {
            this.props.onSaveChanges(CardModel.createFromState(this.state));
        }
    }
}