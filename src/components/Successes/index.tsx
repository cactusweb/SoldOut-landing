import React, { FC } from 'react'
import styled from 'styled-components'
import { Title } from '../Title'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;

  @media ${props => props.theme.media.tablet} {
    margin-top: 80px;
  }

  @media ${props => props.theme.media.phone} {
    margin-top: 60px;
  }
`

export const Successes: FC = () => {
  return (
    <Container>
      <Title>Success by our users</Title>
    </Container>
  )
}
