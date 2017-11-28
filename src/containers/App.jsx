import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Index from "./Index";
import Helmet from 'react-helmet'


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const messages = {
            root: "You don't see anything here",
            heaven: "Ahhhh there is nothing in this heaven",
            hell: "What is you hope to see if you come to this hell",
            notFound: "Why you come here !!! There is no place for you :P",
        };
        
        return (
            <div>
                <Helmet
                    htmlAttributes={{lang: "en"}}
                    titleTemplate="%s | Somewhere ~"
                    titleAttributes={{itemprop: "name", lang: "en"}}
                    meta={[
                        {name: "description", content: "You do not know anything ~"},
                        {name: "viewport", content: "width=device-width, initial-scale=1"},
                    ]}
                />
                
                <Switch>
                    <Route exact path='/' component={() => <Index title={messages.root} />} />
                    <Route path='/heaven' component={() => <Index title={messages.heaven} />} />
                    <Route path='/hell' component={() => <Index title={messages.hell} />} />
                    <Route component={() => <Index title={messages.notFound} />} />
                </Switch>
            </div>
        );
    }
}

export default App;