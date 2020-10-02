import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Smoothies from './Smoothies';

describe('<SMOOTHIES TEST />', () => {
  it('RENDERS Smoothies.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Smoothies /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})