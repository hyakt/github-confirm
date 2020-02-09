import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import { Modal } from '../modal'

describe('components/modal', () => {
  afterEach(cleanup);
  describe('when render the modal component', () => {
    it('create portal', () => {
      const { container } = render(React.createElement(Modal))
      expect(container).toBeInTheDocument();
    })
    it('destory portal when click OK button', () => {
      const { getByText, queryByTestId } = render(React.createElement(Modal))
      expect(queryByTestId('github-confirm-modal')).not.toBeNull()
      fireEvent.click(getByText('OK'))
      expect(queryByTestId('github-confirm-modal')).toBeNull()
    })
    it('destory portal when click cancel button', () => {
      const { getByText, queryByTestId } = render(React.createElement(Modal))
      expect(queryByTestId('github-confirm-modal')).not.toBeNull()
      fireEvent.click(getByText('Cancel'))
      expect(queryByTestId('github-confirm-modal')).toBeNull()
    })
    it('destory portal when click cover', () => {
      const { queryByTestId, getByTestId } = render(React.createElement(Modal))
      expect(queryByTestId('github-confirm-modal')).not.toBeNull()
      fireEvent.click(getByTestId('github-confirm-modal-cover'))
      expect(queryByTestId('github-confirm-modal')).toBeNull()
    })
    it.todo('stop the event of props when render component');
    it.todo('execute event when click handleOK');
  })
});
