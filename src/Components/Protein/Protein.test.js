import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Protein from './Protein';

describe('<PROTEIN TEST />', () => {
  it('RENDERS Protein.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Protein /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});