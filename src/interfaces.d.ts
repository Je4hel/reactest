import { CardModel } from "./model/CardModel";

export interface IBaseProps
{
    className?: string;
}

export interface ICheckboxProps extends IBaseProps
{
    id?: string;
}

export interface IButtonProps extends IBaseProps
{
    primary?: boolean;
    danger?: boolean;
    warning?: boolean;
    success?: boolean;
    onClick?: (event: any) => any
}

export interface ITagProps extends IBaseProps
{
    text: string;
    color?: string;
}

export interface IAuthorProps extends IBaseProps
{
    name: string;
    date: Date;
}

export interface ILinkboxProps extends IBaseProps
{
    url: string;
}

export interface ILinkboxState extends IBaseProps
{
    image?: string;
    title?: string;
    description?: string;
}

export interface ITaskProps extends IBaseProps
{
    text: string;
    done?: boolean;
    className?: string;
}

export interface ICardProps extends IBaseProps, ICardState
{
    isEditing?: boolean;

    // Events
    onSaveChanges?: (card: CardModel) => void;
    onDismissChanges?: () => void;
}

export interface ICardState
{
    title: string;
    content: string;
    author?: string;
    date?: Date;
    tags?: string[];
}

export interface ISidemenuProps extends IBaseProps
{
    title?: string;
}

export interface IAppProps extends IBaseProps
{
    
}

export interface IAppState
{
    cards: CardModel[];
}