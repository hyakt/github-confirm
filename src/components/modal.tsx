import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

type Props = { }

export const Modal: React.FC<Props> = props => {

  const [display, setDisplay] = useState(true);

  const Modal = styled.


  const handleOK = () => {
    setDisplay(false)
  }

  const handleCancel = () => {
    setDisplay(false)
  }

  return (
    createPortal(
      display ?
        <div data-testid='github-confirm-modal'>
          <dl>
            <dt>Are you sure</dt>
            <dd>
              <button onClick={handleOK}>OK</button>
            </dd>
            <dd>
              <button onClick={handleCancel}>Cancel</button>
            </dd>
          </dl>
        </div>
        : null,
      document.body
  ))
}
