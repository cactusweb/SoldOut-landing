import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Background from '../Background'
import { FAQ } from '../../blocks/FAQ'
import Header from '../../blocks/Header'
import { Priorities } from '../../blocks/Priorities'
import { SocialMedia } from '../SocialMedia'
import { Successes } from '../../blocks/Successes'

const Container = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 20px;

  @media ${props => props.theme.media.tablet} {
    max-width: 768px;
    padding: 0 20px;
  }
`

const UserAgreement = styled.a`
  display: block;
  font-size: 14px;
  color: white;
  text-align: center;
  margin-top: 30px;
  padding-bottom: 30px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media ${props => props.theme.media.tablet} {
    margin-top: 25px;
    padding-bottom: 25px;
  }

  @media ${props => props.theme.media.phone} {
    margin-top: 20px;
    padding-bottom: 20px;
  }
`

export const App: FC = () => {
  const [moveEvent, setMoveEvent] =
    useState<React.MouseEvent<HTMLDivElement> | null>(null)

  return (
    <Background moveEvent={moveEvent}>
      <Header onMouseMove={e => setMoveEvent(e)} />
      <Container>
        <Priorities />
        <Successes />
        <FAQ />
        <SocialMedia />
        <UserAgreement href="#">user agreement</UserAgreement>
      </Container>
    </Background>
  )
}
