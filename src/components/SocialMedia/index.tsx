import React, { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as VK } from '../../assets/vk.svg'
import { ReactComponent as Twitter } from '../../assets/twitter.svg'
import { ReactComponent as Discord } from '../../assets/discord.svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;

  & > * {
    cursor: pointer;

    margin-right: 35px;
    fill: ${props => props.theme.colors.secondary};
    &:hover {
      fill: ${props => props.theme.colors.action};
    }
  }

  & > :last-child {
    margin-right: 0;
  }

  @media ${props => props.theme.media.tablet} {
    margin-top: 80px;
  }

  @media ${props => props.theme.media.phone} {
    margin-top: 60px;
  }
`

export const SocialMedia: FC = () => {
  return (
    <Container>
      <a href="#rtet" target="_blank">
        <Discord fill="inherit" />
      </a>
      <a href="https://vk.com/soldoutcook" target="_blank" rel="noreferrer">
        <VK fill="inherit" />
      </a>
      <a
        href="https://twitter.com/Soldoutcook"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter fill="inherit" />
      </a>
    </Container>
  )
}
