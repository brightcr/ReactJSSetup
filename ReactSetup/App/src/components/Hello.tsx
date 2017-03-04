import * as React from "react";

export interface HelloProps { Message: string; }

const divStyle = {
    background: '#1f1f1f',
    color: 'white',
    padding: '30px',
    margin: '10px',
    fontFamily: 'SegoeUI, Arial, Times New Roman'
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return (
            <div style={divStyle}>
                <h1>Hello!</h1>
                <p><h2>{this.props.Message}</h2></p>
            </div>
        );
    }
}