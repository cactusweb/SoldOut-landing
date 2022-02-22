import React, { FC, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Title } from '../../components/Title'
import { getImages } from '../../constants/images'
import _ from 'lodash'
import Block from '../../components/Block'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: 510px;
  position: relative;
`

const Row = styled.div<{ delay?: string; animation?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;

  animation-name: ${props => (props.animation ? 'fade' : 'none')};
  animation-duration: 10s;
  animation-delay: ${props => props.delay || '0s'};
  animation-iteration-count: 1;

  @media (max-width: 1000px) {
    justify-content: center;

    & > :first-child {
      display: none;
    }
    & > :last-child {
      display: none;
    }
  }

  @keyframes fade {
    0% {
      transform: scale(0.8) translateY(25px);
      opacity: 0;
    }
    20% {
      transform: scale(0.8) translateY(0);
      opacity: 1;
    }
    40% {
      transform: scale(1) translateY(-170px);
    }
    60% {
      transform: scale(0.8) translateY(-425px);
      opacity: 1;
    }
    80% {
      transform: scale(0.8) translateY(-450px);
      opacity: 0;
    }
    100% {
      transform: scale(0.8) translateY(25px);
      opacity: 0;
    }
  }
`

const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  border: 1px solid #ebe9ff;
  border-radius: 15px;
  overflow: hidden;
`

const Image = styled.img`
  max-width: 100%;
`

export const Successes: FC = () => {
  const [successes, setSuccesses] = useState<string[][]>([])
  const [animation, setAnimation] = useState(true)

  const fetchSuccesses = useCallback(async () => {
    const images = await getImages()
    setSuccesses(_.chunk(images, 3))
  }, [])

  useEffect(() => {
    fetchSuccesses()
  }, [fetchSuccesses])

  useEffect(() => {
    if (!successes.length) return
    setInterval(() => {
      setAnimation(() => false)
    }, successes.length * 1000 * 3)
  }, [successes])

  useEffect(() => {
    if (!successes.length) return
    setInterval(() => {
      setAnimation(() => true)
    }, successes.length * 1000 * 3 + 500)
  }, [successes])

  if (!successes.length) {
    return (
      <Block>
        <Title>Success by our users</Title>
        <Container></Container>
      </Block>
    )
  }

  return (
    <Block>
      <Title>Success by our users</Title>
      <Container>
        {successes.map((row, i) => (
          <Row key={i} delay={`${i * 2}s`} animation={animation}>
            {row.map((s, i) => (
              <Success key={i}>
                <Image src={s} />
              </Success>
            ))}
          </Row>
        ))}
      </Container>
    </Block>
  )
}
