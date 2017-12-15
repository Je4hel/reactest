import * as React from "react";

import { storiesOf } from '@storybook/react';

import { Card } from "../src/component/Card";
import { Tag } from "../src/component/Tag";
import { Author } from "../src/component/Author";
import { Linkbox } from "../src/component/Linkbox";
import { Task } from "../src/component/Task";

require("../src/stylesheets/main.scss");

storiesOf("Reactest Components", module)
    .addDecorator(story => (
        <div className="reactest">
            { story() }
        </div>
    ))

    .add("Card / Single card", () => {
        return <Card />
    })
    .add("Card / Card flow", () => {
        return (
            <div>
                <Card />
                <Card />
                <Card />
            </div>
        )
    })

    .add("Tag / Default color", () => {
        return <Tag text="introduction" />
    })
    .add("Tag / With color", () => {
        return <Tag text="introduction" color="#1CBBB4" />
    })
    .add("Author", () => {
        return <Author name="👾 Guillaume Lecêtre" date={new Date} />
    })

    .add("Linkbox", () => {
        return <Linkbox url="https://google.fr" />
    })

    .add("Task", () => {
        return <Task text="Go to the gym more regularly!" />
    })
