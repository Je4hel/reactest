export interface ICheckboxProps
{
    id?: string;
    className?: string
}

export interface ITagProps
{
    text: string;
    color?: string;
    className?: string;
}

export interface IAuthorProps
{
    name: string;
    date: Date;
    className?: string;
}

export interface ILinkboxProps
{
    url: string;
    className?: string;
}

export interface ILinkboxState
{
    image?: string;
    title?: string;
    description?: string;
}

export interface ITaskProps
{
    text: string;
    done?: boolean;
    className?: string;
}