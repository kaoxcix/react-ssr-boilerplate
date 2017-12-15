import React, { Component } from "react";
import Styled from "styled-components";
import Config from 'Src/config'

const Terminal = Styled.div`
    font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier", sans-serif;
	width: 550px;
    height: 330px;
    position: relative;
    background-color: rgba(0, 0, 0, .7);
    border-color: rgba(0, 0, 0, .8);
    padding: 30px 8px 0px 8px;
    box-sizing: border-box;
    box-shadow: 0 0 25px rgba(0, 0, 0, .5);
    border-radius: 5px;
`;

const Bar = Styled.div`
	background: #f9f9f3;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 6px;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    
    ${props => props.hasMoveCursorAtBar && `
      cursor: move;
    `}
    
    &:before {
      font-size: 11px;
      content: 'user@${Config.SITE_DOMAIN}: ~/${Config.SITE_NAME}';
      color: #171717;
      position: absolute;
      width: 100%;
      text-align: center;
      top: 7px;
    }
`;

const Button = Styled.div`
	display: inline-block;
    float: left;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    margin-right: 5px;
`;

const Close = Button.extend`
	background: #fc635d;
`;

const Min = Button.extend`
	background: #fdbc40;
`;

const Max = Button.extend`
	background: #34c84a;
`;

const Text = Styled.span`
    color: white;
    font-size: 12px;
    line-height: 1.55em;
    
    & a {
      color: inherit;
    }
`;

const Messages = Text.extend`
    ${props => props.isCommand && `
      &::first-letter {
        color: #f2796b;
        font-size: 1.3em;
      }
    
      &:before {
        color: #6ecdca;
        content: '➜ ${Config.SITE_NAME} '; 
      }
    `}
    
    ${props => props.isSuccess && `
      color: #34c84a;
    `}
    
    ${props => props.isError && `
      color: #f24636;
    `}
`;

class MacOsTerminal extends Component {

    render() {
        return (
            <Terminal className="macos-terminal">
                <Bar className="macos-terminal-bar" hasMoveCursorAtBar={this.props.hasMoveCursorAtBar}>
                    <Close/>
                    <Min/>
                    <Max/>
                </Bar>
                <Text>
                    {this.props.children}
                </Text>
            </Terminal>
        )
    }
}

export default MacOsTerminal;
export { Messages };
