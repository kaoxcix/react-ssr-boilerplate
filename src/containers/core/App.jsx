import React, { Component } from "react";
import Routes from "Containers/core/Routes";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Config from 'Src/config'

class App extends Component {
    render() {
        return (
            <div>
                <Helmet
                    titleTemplate={`%s | ${Config.SITE_NAME}`}
                    meta={[
                        {name: "description", content: Config.SITE_DESCRIPTION},
                        {name: "viewport", content: "width=device-width, initial-scale=1"},
                    ]}
                />

                <Switch>
                    <Route exact path="/" component={Routes}/>
                    <Route path='/:lang(en|th|kr)/' component={Routes}/>
                    <Route path='/' component={Routes}/>
                </Switch>
            </div>
        );
    }
}

export default (App);
