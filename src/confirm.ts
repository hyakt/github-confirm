import React from 'react'
import { render } from 'react-dom'

import { Modal } from './components/modal'


const handleSubmit = (target: EventTarget | null, source: Element, event: Event): void => {
  if (target === null) return;

  if (target === source) {
    render(React.createElement(Modal, { event: event }), document.createElement('div'))
    event.preventDefault()
    event.stopPropagation()
  }
}

document.addEventListener('click', (event) => {
  const target = event.target
  const submitButtons = document.querySelectorAll('#partial-new-comment-form-actions button[type="submit"]')

  submitButtons.forEach(button => {
    if (button !== null) {
      handleSubmit(target, button, event)
      Array.from(button.children).forEach(child => {
        handleSubmit(target, child, event)
      })
    }
  })
}, true)







