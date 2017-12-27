import { ICardState } from "../interfaces";

export class CardModel
{
    title: string;
    content: string;
    author?: string;
    date?: Date;
    tags?: string[];

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    static createFromState(componentState: ICardState)
    {
        let newCard = new CardModel(componentState.title, componentState.content);

        newCard.author = componentState.author;
        newCard.date = componentState.date;
        newCard.tags = componentState.tags;

        return newCard;
    }
}