import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Cafe from './Cafe'

describe('<CAFE TEST />', () => {
  it('RENDERS Cafe.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Cafe /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})