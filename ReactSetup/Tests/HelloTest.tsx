/// <reference path="../node_modules/@types/jest/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import { Hello } from '../App/src/components/Hello'

test('Verify Hello message in react component using test utils', () => {
    // Render a div with message in the document
    const helloElement =
        TestUtils.renderIntoDocument(
            <Hello Message="Test Message" />) as React.Component<Hello, null>;
    const msgNode = ReactDOM.findDOMNode(helloElement);

    // Verify that message is rendered correctly
    expect(msgNode.textContent).toContain('Test Message');
});


test('Verify Hello message in react component using enzyme shallow', () => {
    // Render a div with message in the document
    const helloElement = shallow(
        <Hello Message="Test Message" />
    );

    // Verify that message is rendered correctly
    expect(helloElement.text()).toContain('Test Message');
});