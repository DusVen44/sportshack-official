import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Menu from './Menu';

describe('<MENU TEST />', () => {
  it('RENDERS Menu.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Menu /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});