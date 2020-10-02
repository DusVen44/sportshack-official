import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Supplements from './Supplements';

describe('<SUPPLEMENTS TEST />', () => {
  it('RENDERS Supplements.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Supplements /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})