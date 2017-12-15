import React, { Component } from "react";
import MacOsTerminal, { Messages } from "Components/MacOsTerminal";
import Helmet from "react-helmet";
import Draggable from "react-draggable";
import ContainerFlexFullScreen from "Components/core/ContainerFlexFullScreen";
import Typist from "react-typist";
import Moment from 'react-moment';

const StyledContainerFlexFullScreen = ContainerFlexFullScreen.extend`
    background: #D66D75;
    background: linear-gradient(to right, #E29587, #D66D75);
`;

class NotFound extends Component {
    render() {
        return (
            <StyledContainerFlexFullScreen center middle>
                <Helmet
                    title="Page not found"
                />
                <Draggable
                    handle=".macos-terminal-bar"
                    bounds="body">
                    <div>
                        <MacOsTerminal hasMoveCursorAtBar>
                            <Messages hasNotPreLineBreak>Last login:  <Moment format="ddd MMM DD HH:mm:ss"/> on ttys007</Messages>
                            <Typist
                                cursor={{
                                    show:         true,
                                    blink:        true,
                                    element:      '_',
                                    hideWhenDone: false,
                                }}>
                                <Messages isCommand hasMoveCursorAtBar>echo "404 PAGE NOT FOUND"</Messages>
                                <br/>
                                <Messages isError>404 PAGE NOT FOUND</Messages>
                                <br/>
                                <Messages isCommand>yarn global add create-go-back</Messages>
                                <br/>
                                <Messages isSuccess>success Installed "create-go-back@9.9.0".</Messages>
                                <br/>
                                <Messages isSuccess>Done in 1.62s.</Messages>
                                <br/>
                                <Messages isCommand>create-go-back</Messages>
                                <br/>
                                <Messages isSuccess>Go back <a href="#">home</a> and start over.</Messages>
                            </Typist>
                        </MacOsTerminal>
                    </div>
                </Draggable>
            </StyledContainerFlexFullScreen>
        )
    }
}

export default (NotFound);