import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

type Props = {
  event: Event,
}

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  background: #fafafa;
  border-radius: 3px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
`

const Title = styled.dt`
  text-align: center;
  font-weight: bold;
  margin-bottom: 18px;
`

const Button = styled.button`
  background: ${(props: { primary?: boolean }) => props.primary ? "#4078c0" : "#bd2c00"};
  color: #fafafa;
  font-size: 1rem;
  margin: 1rem;
  width: 100px;
  padding: 0.25em 1em;
  border: none ;
  border-radius: 3px;
`

export const Modal: React.FC<Props> = () => {

  const [isDisplay, setIsDisplay] = useState(false)

  useEffect(() => {
    window.addEventListener('click', (event) => {
      const target = event.target;
      const sources = document.querySelectorAll('#partial-new-comment-form-actions button[type="submit"]')

      sources.forEach(source => {
        if (source !== null) {
          target === source && setIsDisplay(true)
          Array.from(source.children).forEach(child => {
            target === child && setIsDisplay(true)
          })
        }
      })
    }, true)
  }, [])

  const onClickCover = () => {
    setIsDisplay(false)
  }

  const handleOK = () => {
    setIsDisplay(false)
  }

  const handleCancel = () => {
    console.log('event.target: ', event.target);
    event.preventDefault()
    event.stopPropagation()
    setIsDisplay(false)
  }

  return (
    createPortal(
      isDisplay ?
        <Cover data-testid='github-confirm-modal-cover' onClick={onClickCover}>
          <Container data-testid='github-confirm-modal'>
            <dl>
              <Title>Are you sure?</Title>
              <Button onClick={handleOK} primary>OK</Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </dl>
          </Container>
        </Cover>
        : null,
      document.body
    ))
}
