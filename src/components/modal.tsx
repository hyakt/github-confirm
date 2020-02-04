import React from 'react'
import { createPortal } from 'react-dom';

type Props = { root: HTMLElement }

export const Modal: React.FC<Props> = props => {

  const handleCancel = () => {
  }

  const handleOk = () => {
  }

  return (
    createPortal(
      <div data-testid='github-confirm-modal'>
        <dl>
          <dt>Are you sure</dt>
          <dd>
            <button onClick={handleOk}>submit</button>
          </dd>
          <dd>
            <button onClick={handleCancel}>cancel</button>
          </dd>
        </dl>
      </div>
      , props.root
    )
  )
}
