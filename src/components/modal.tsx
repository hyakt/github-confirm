import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

type Props = { }

export const Modal: React.FC<Props> = props => {

  const [isDisplay, setIsDisplay] = useState(true);

  const Cover = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  `;

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
  `;

  const Title = styled.dt`
    text-align: center;
    font-weight: bold;
    margin-bottom: 18px;
  `

  const Button = styled.button`
    background: ${(props: {primary?: boolean}) => props.primary ? "#4078c0" : "#bd2c00"};
    color: #fafafa;
    font-size: 1rem;
    margin: 1rem;
    width: 100px;
    padding: 0.25em 1em;
    border: none ;
    border-radius: 3px;
  `

  const handleOK = () => {
    setIsDisplay(false)
  }

  const handleCancel = () => {
    setIsDisplay(false)
  }

  return (
    createPortal(
      isDisplay ?
        <Cover>
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
