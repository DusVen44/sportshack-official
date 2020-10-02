import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

describe('<GALLERY TEST />', () => {
  it('RENDERS Gallery.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Gallery /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});