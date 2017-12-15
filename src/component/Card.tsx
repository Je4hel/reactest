import * as React from "react";
import { Tag } from "./Tag";
import { Author } from "./Author";
import { Linkbox } from "./Linkbox";

export class Card extends React.Component
{
    render ()
    {
        const tags = [
            { text: "Introduction", color: "#899CFC" }, 
            { text: "Reactest Basics", color: "#1CBBB4" },
            { text: "Getting started", color: "#E95A7D" }
        ].map((tag) => <li className="rt-card-tag-item"><Tag text={ tag.text } color={ tag.color } /></li>);

        return (
            <div className="rt-card">
                <ul className="rt-card-tag-list">{ tags }</ul>

                <h2 className="rt-card-title">What is reactest exactly?</h2>
                <Author name="👾 Ben Kingsley" date={new Date} className="rt-card-author" />

                <div>
                    We imagined <strong>reactest</strong> to be used like a journal, or a logbook, in which you would simply put your thoughts. But when doing so, we surely wanted to bring that old logging habit inherited from sailors - <em>maybe earlier travelers, even!</em> - to the digital age.<br/>
                    What can it do? Well, its major strength is to log <strong>ideas</strong>. You can use easy <strong>formatting</strong> to help shape them for a better reading later and you can also add meta-data or <strong>external content</strong> such as images or files. Really, you can use it any way you want. You can even share it with your team!<br/>
                    The system is powered by a flexible <strong>search engine</strong> and all content is <strong>versioned</strong> so you can go back in time without messing with the timeline!<br/>
                    Anyhoo, the best is just to play around to see what it can actually do, rather than having us telling you functionalities and whatnots in boring bullet-point lists. But if you really like reading lists, then you can have a look at our exhaustive functionalities list over there.<br/>
                    If you decide that you like it - <em>and we sure hope you will!</em> - head to the download post to know how to get going.<br/>
                    See you around!
                </div>

                <div className="rt-card-attachments">
                    <Linkbox url="https://google.fr" className="rt-card-attachments-item"/>
                    <Linkbox url="https://google.fr" className="rt-card-attachments-item"/>
                    <Linkbox url="https://google.fr" className="rt-card-attachments-item"/>
                </div>
            </div>
        )
    }
}