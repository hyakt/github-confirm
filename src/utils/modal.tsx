import React from 'react'
import { createPortal } from 'react-dom';

type Props = { root: HTMLElement }

export const Modal: React.FC<Props> = props => {

  const cancel = () => {
  }

  const submit = () => {
  }

  console.log('modal: ', 'modal');

  return (
    createPortal(
      <div id='github-confirm-modal'>
        <dl>
          <dt>Are you sure</dt>
          <dd>
            <button onClick={submit}>submit</button>
          </dd>
          <dd>
            <button onClick={cancel}>cancel</button>
          </dd>
        </dl>
      </div>
      , props.root
    )
  )
}
