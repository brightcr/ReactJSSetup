import * as React from "react";

export interface HelloProps { Message1: string; Message2: string; Message3: string; SuccessMessage: string; }

const divStyle = {
    background: '#171717',
    color: 'white',
    padding: '30px',
    margin: '10px',
    fontFamily: 'Segoe UI, Arial, Times New Roman'
}

const tsStyle = { color: '#294e80' };
const reactStyle = { color: '#00d8ff' };
const webpackStyle = { color: '#73afca' };

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return (
            <div style={divStyle}>
                <h1>Hello!</h1>
                <div>
                    <h4>Message:
                        <span style={tsStyle}> {this.props.Message1}, </span>
                        <span style={reactStyle}>{this.props.Message2} and </span> 
                        <span style={webpackStyle}>{this.props.Message3} </span>
                        <span> {this.props.SuccessMessage}</span>
                    </h4>
                </div>
            </div>
        );
    }
}