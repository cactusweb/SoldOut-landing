import React, { FC, useCallback, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import background from '../../assets/background.svg'
import background2 from '../../assets/background-2.svg'
import Star from '../Star'

const StyledBackground = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;

  @media ${props => props.theme.media.tablet} {
    background-image: url(${background2});
  }
  @media ${props => props.theme.media.phone} {
    background-image: url(${background2});
  }
`

type Props = {
  moveEvent: React.MouseEvent<HTMLDivElement> | null
}

const Background: FC<Props> = ({ moveEvent, ...props }) => {
  const stars = useMemo(() => {
    return [
      <Star
        key={0}
        data-speed="0.5"
        width="96px"
        height="142px"
        top="30vh"
        right="30vw"
      />,
      <Star
        key={1}
        data-speed="1.0"
        width="48px"
        height="67px"
        top="50vh"
        right="10vw"
      />,
      <Star
        key={2}
        data-speed="1.5"
        width="56px"
        height="83px"
        top="80vh"
        right="5vw"
      />,
      <Star
        key={3}
        data-speed="2"
        width="56px"
        height="83px"
        top="90vh"
        right="15vw"
      />,
      <Star
        key={4}
        data-speed="2.5"
        width="85px"
        height="126px"
        top="85vh"
        right="45vw"
      />,
      <Star
        key={5}
        data-speed="3"
        width="72px"
        height="92px"
        top="75vh"
        left="35vw"
      />,
      <Star
        key={6}
        data-speed="3"
        width="56px"
        height="83px"
        top="55vh"
        left="20vw"
      />,
      <Star
        key={7}
        data-speed="3"
        width="56px"
        height="72px"
        top="30vh"
        left="30vw"
      />
    ]
  }, [])

  const transformStars = useCallback(() => {
    if (window.innerWidth < 780) return
    const stars = document.querySelectorAll<HTMLDivElement>('[data-speed]')
    stars.forEach(star => {
      const speed = star.getAttribute('data-speed')
      if (!speed || !moveEvent) return
      const x = (-moveEvent.pageX * Number(speed)) / 100
      const y = (-moveEvent.pageY * Number(speed)) / 100
      star.style.transform = `translate( ${x}px, ${y}px )`
    })
  }, [moveEvent])

  useEffect(() => {
    transformStars()
  }, [transformStars])

  return (
    <>
      {window.innerWidth > 780 && stars.map(star => star)}
      <StyledBackground {...props} />
    </>
  )
}

export default Background
