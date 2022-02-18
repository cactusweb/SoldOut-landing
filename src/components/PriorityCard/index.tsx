import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
  height: 70px;
  width: 70px;
  background: linear-gradient(180deg, #997aea 0%, #501cd5 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const Container = styled.div<{ animation: string | null; justifySelf: string }>`
  width: 270px;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid #ebe9ff;
  border-radius: 15px;
  position: relative;
  padding: 50px 0 15px 30px;
  justify-self: ${props => props.justifySelf};
  opacity: 0;
  animation: ${props => props.animation};

  @media (max-width: 900px) {
    justify-self: center;
  }

  @media ${props => props.theme.media.tablet} {
    justify-self: center;
  }
  @media ${props => props.theme.media.phone} {
    justify-self: center;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const List = styled.ul`
  padding: 0;
  margin: 0;
`

const Item = styled.li`
  font-size: 16px;
  font-weight: 600;
  color: #ebe9ff;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`

type Props = {
  Icon: ReactNode
  items: string[]
  animation: string
  inView: boolean
  justifySelf: string
}

export const PriorityCard: FC<Props> = ({
  Icon,
  items,
  animation,
  inView,
  justifySelf
}) => {
  return (
    <Container animation={inView ? animation : null} justifySelf={justifySelf}>
      <IconContainer>{Icon}</IconContainer>
      {items.length && (
        <List>
          {items.map((i, idx) => (
            <Item key={idx}>{i}</Item>
          ))}
        </List>
      )}
    </Container>
  )
}
