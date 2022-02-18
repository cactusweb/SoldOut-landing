import React, { FC } from 'react'
import styled from 'styled-components'
import { Question } from '../Question'
import { Title } from '../Title'
import { useInView } from 'react-intersection-observer'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;

  @media ${props => props.theme.media.tablet} {
    margin-top: 100px;
  }

  @media ${props => props.theme.media.phone} {
    margin-top: 80px;
  }
`

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 60px;
`

const faq = [
  {
    title: 'How much does a subscription cost?',
    answer: 'Subscription costs 2000 rubles'
  },
  {
    title: 'What monitors do you have?',
    answer:
      'You can see the list of monitors <a href="https://vk.com/topic-201810061_48367780" target="_blank">here</a>'
  },
  {
    title: 'How to get into your group?',
    answer:
      'You can get into the soldout cook by purchasing a renewal copy on the restock'
  },
  {
    title: 'How to contact you?',
    answer: 'You can contact us on our social networks'
  },
  {
    title: 'When will the restocks be?',
    answer: 'You can follow the notifications in our VK group'
  }
]

export const FAQ: FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <Container>
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
    </Container>
  )
}
