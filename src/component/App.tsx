import * as React from "react";
import * as Classnames from "classnames";
import { Card } from "./Card";
import { Sidemenu } from "./Sidemenu";
import { IAppProps } from "../interfaces";

export class App extends React.Component<IAppProps>
{
    render()
    {
        const outerClasses = Classnames("rt-app", this.props.className);

        return (
            <div className={outerClasses}>
                <Sidemenu title="Reactest">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </Sidemenu>
                <div>
                    <Card title="Carte sans titre !" content="One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.<br/>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.<br/>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. 'What's happened to me?' he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.<br/>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather."/>
                </div>
            </div>
        )
    }
}