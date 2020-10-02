import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Gear from './Gear';

describe('<GEAR TEST />', () => {
  it('RENDERS Gear.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Gear /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})