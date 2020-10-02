import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import BodyComp from './BodyComp';

describe('<BODY COMP ANALYSES TEST />', () => {
  it('RENDERS BodyComp.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><BodyComp /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});