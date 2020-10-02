import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import CafePics from './CafePics';

describe('<CAFEPICS TEST />', () => {
  it('RENDERS CafePics.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><CafePics /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});