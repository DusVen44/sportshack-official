import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SmoothieNutrition from './SmoothieNutrition';

describe('<SMOOTHIE NUTRITION TEST />', () => {
  it('RENDERS SmoothieNutrition.js WITHOUT CRASHING', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><SmoothieNutrition /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})