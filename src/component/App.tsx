import * as React from "react";
import * as Classnames from "classnames";
import { Card } from "./Card";
import { Sidemenu } from "./Sidemenu";
import { IAppProps, IAppState } from "../interfaces";
import { CardModel } from "../model/CardModel";

export class App extends React.Component<IAppProps, IAppState>
{
    constructor(props: IAppProps)
    {
        super(props);
        this.state = {
            cards: []
        };
    }

    createEmptyCard = () => 
    {
        let newCard = new CardModel("Carte sans titre", "Cette carte n'a encore aucun contenu.");
        newCard.date = new Date;
        newCard.id = performance.now();

        this.setState((prevState, props) => {
            prevState.cards.push(newCard);

            return {
                cards: prevState.cards
            }
        });
    }

    saveCard = (editedCard: CardModel) =>
    {
        this.setState((prevState, props) => {
            editedCard.isNew = false;

            let indexInCollection = prevState.cards.findIndex((c) => c.id == editedCard.id);
            prevState.cards[indexInCollection] = editedCard;

            return {
                cards: prevState.cards
            }
        });

        return true;
    }

    deleteCard = (deletingCard: CardModel) =>
    {
        console.log("Deleting card", deletingCard);

        this.setState((prevState, props) => {
            let indexInCollection = prevState.cards.findIndex((c) => c.id == deletingCard.id);
            prevState.cards.splice(indexInCollection, 1);

            console.log("Card index: " + indexInCollection);
            console.log("New collection", prevState.cards);

            return {
                cards: prevState.cards
            }
        });
    }

    render()
    {
        const outerClasses = Classnames("rt-app", this.props.className);

        let cards = this.state.cards
            .sort((card1, card2) => {
                if (card1.date < card2.date)
                    return 1;
                else if (card2.date > card2.date)
                    return -1;
                
                return 0;
            })
            .map((card) => 
                <Card   key={card.id}
                        id={card.id} 
                        title={card.title} 
                        content={card.content} 
                        author={card.author} 
                        date={card.date} 
                        tags={card.tags} 
                        onSaveChanges={this.saveCard}
                        onDelete={this.deleteCard}
                        isEditing={card.isNew} />
            );

        return (
            <div className={outerClasses}>
                <Sidemenu title="Reactest">
                    <ul>
                        <li><a onClick={this.createEmptyCard}>Add a card</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </Sidemenu>
                <div className="rt-app-cards">
                    {cards}                    
                </div>
            </div>
        )
    }
}