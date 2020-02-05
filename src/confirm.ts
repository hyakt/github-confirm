import React from 'react';
import { render } from 'react-dom';

import { Modal } from './components/modal';

const form = document.querySelector('form.js-new-comment-form') as HTMLElement;

form.addEventListener('submit', () => {
  render(React.createElement(Modal), document.createElement('div'));
});
