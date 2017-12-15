import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { getLanguageUrl, joinUrl } from "Utilities/url";
import NotFound from 'Containers/core/NotFound'

class Routes extends Component {
    render() {
        const {match} = this.props;
        return (
            <Switch>
                {/*<Route path={Path.join(match.url, 'xxx')} component={Xxx}/>*/}
                <Route path="*" component={NotFound}/>
            </Switch>
        );
    }
}

export default Routes;