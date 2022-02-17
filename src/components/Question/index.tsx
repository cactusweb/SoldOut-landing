import React, { FC, useState } from 'react'
import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'

const Container = styled.div<{ animation: string | null }>`
  width: 100%;
  padding: 22px 30px;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid #ebe9ff;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  opacity: 0;

  animation: ${props => props.animation};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Title = styled.div<{ isOpen: boolean }>`
  font-weight: 600;
  font-size: 18px;
  color: #ebe9ff;
  position: relative;
  margin-bottom: ${props => props.isOpen && '24px'};
  transition: all 0.4s ease;
  padding-right: 30px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 24px;
    height: 12px;
    background-image: url(${arrow});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transform: ${props => props.isOpen && 'translateY(-50%) rotateX(180deg)'};
    transition: all 0.4s ease;
  }
`

const Answer = styled.div<{ isOpen: boolean }>`
  font-weight: 500;
  font-size: 16px;
  color: #ebe9ff;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  max-height: ${props => props.isOpen && '1000px'};
  opacity: ${props => props.isOpen && '1'};
  transition: all 0.4s ease;

  & > a {
    color: #ebe9ff;
  }
`

type Props = {
  title: string
  answer: string
  animation: string
  inView: boolean
}

export const Question: FC<Props> = ({ title, answer, animation, inView }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container
      onClick={() => setIsOpen(!isOpen)}
      animation={inView ? animation : null}
    >
      <Title isOpen={isOpen}>{title}</Title>
      <Answer
        isOpen={isOpen}
        dangerouslySetInnerHTML={{ __html: answer }}
      ></Answer>
    </Container>
  )
}
