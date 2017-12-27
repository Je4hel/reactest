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
}