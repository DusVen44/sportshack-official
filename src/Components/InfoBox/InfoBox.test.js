import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import InfoBox from './InfoBox';

describe('<INFOBOX TEST />', () => {
  it('RENDERS InfoBox.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><InfoBox /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})