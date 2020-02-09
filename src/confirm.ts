import React from 'react'
import { render } from 'react-dom'

import { Modal } from './components/modal'

document.addEventListener('click', (event) => {
  const target = event.target
  const submitButtons = document.querySelectorAll('#partial-new-comment-form-actions button[type="submit"]')
  submitButtons.forEach(button => {
    console.log('button: ', button);
    if (target === button) {
      console.log('submit!')
      render(React.createElement(Modal, { event: event }), document.createElement('div'))
      event.preventDefault()
      event.stopImmediatePropagation()
    }
  })
}, true)







