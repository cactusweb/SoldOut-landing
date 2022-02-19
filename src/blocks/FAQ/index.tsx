import React, { FC } from 'react'
import styled from 'styled-components'
import { Question } from '../../components/Question'
import { Title } from '../../components/Title'
import { useInView } from 'react-intersection-observer'
import Block from '../../components/Block'
import { faq } from '../../constants/faq'

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const FAQ: FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <Block>
      <Title>F.A.Q.</Title>
      <Questions ref={ref}>
        {faq.map((q, i) => (
          <Question
            key={i}
            title={q.title}
            answer={q.answer}
            animation={`fadeIn 1s ease ${i * 0.2}s forwards`}
            inView={inView}
          />
        ))}
      </Questions>
    </Block>
  )
}
