"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var divStyle = {
    background: '#1f1f1f',
    color: 'white',
    padding: '30px',
    margin: '10px',
    fontFamily: 'SegoeUI, Arial, Times New Roman'
};
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return (React.createElement("div", { style: divStyle },
            React.createElement("h1", null, "Hello!"),
            React.createElement("p", null,
                React.createElement("h2", null, this.props.Message))));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map