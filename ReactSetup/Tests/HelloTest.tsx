/// <reference path="../node_modules/@types/jest/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from 'react-dom/test-utils';

import { Hello } from '../App/src/components/Hello'

// For Enzyme
import { configure } from 'enzyme'
import { shallow } from 'enzyme';
import  * as Adapter  from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });


test('Verify Hello message in react component using test utils', () => {
    // Render a div with message in the document
    const helloElement =
        TestUtils.renderIntoDocument(
            <Hello Message1="Test Message" Message2="" Message3="" SuccessMessage="Success" />) as React.Component<Hello, null>;
    const msgNode = ReactDOM.findDOMNode(helloElement);

    // Verify that message is rendered correctly
    expect(msgNode.textContent).toContain('Test Message');
    expect(msgNode.textContent).toContain('Success');
});


test('Verify Hello message in react component using enzyme shallow', () => {
    // Render a div with message in the document
    const helloElement = shallow(
        <Hello Message1="Test Message" Message2="" Message3="" SuccessMessage="" />
    );

    // Verify that message is rendered correctly
    expect(helloElement.text()).toContain('Test Message');
});