import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './Home';

describe('<HOME TEST />', () => {
  it('RENDERS Home.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Home /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});