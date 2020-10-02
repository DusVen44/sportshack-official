import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Map from './Map';

describe('<MAP TEST />', () => {
  it('RENDERS Map.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Map /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})