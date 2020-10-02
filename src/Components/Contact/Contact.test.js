import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Contact from './Contact';

describe('<CONTACT TEST />', () => {
  it('RENDERS Contact.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Contact /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})