import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'

import {Modal} from '../modal'

describe('components/modal', () => {
  afterEach(cleanup);
  describe('when render the modal component', () => {
    it('create portal', () => {
      const {container} = render(React.createElement(Modal))
      expect(container).toBeInTheDocument();
    })
    it('destory portal when on click Ok button', () => {
      const {getByText, queryByTestId} = render(React.createElement(Modal))
      expect(queryByTestId('github-confirm-modal')).not.toBeNull()
      fireEvent.click(getByText('OK'))
      expect(queryByTestId('github-confirm-modal')).toBeNull()
    })
    it('destory portal when on click cancel button', () => {
      const {getByText, queryByTestId} = render(React.createElement(Modal))
      expect(queryByTestId('github-confirm-modal')).not.toBeNull()
      fireEvent.click(getByText('Cancel'))
      expect(queryByTestId('github-confirm-modal')).toBeNull()
    })
  })
});
