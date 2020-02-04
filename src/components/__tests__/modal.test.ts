import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, cleanup} from '@testing-library/react'

import {Modal} from '../modal'

afterEach(cleanup);

describe('components/modal', () => {
  describe('when render the modal component', () => {
    it('create portal', () => {
      const portalRoot = document.createElement('div')
      const modal = render(React.createElement(Modal, {root: portalRoot}))
      expect(modal.container).toBeInTheDocument();
    })
    it.todo('destory portal when on click Ok button')
    it.todo('destory portal when on click cancel button')
  })
});
