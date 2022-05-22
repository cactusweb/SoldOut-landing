import React, { FC } from 'react'
import { PriorityCard } from '../../components/PriorityCard'
import { ReactComponent as Smile } from '../../assets/smile.svg'
import { ReactComponent as Monitor } from '../../assets/monitor.svg'
import { ReactComponent as Punk } from '../../assets/punk.svg'
import { ReactComponent as Analys } from '../../assets/analys.svg'
import { ReactComponent as Gears } from '../../assets/gears.svg'
import { ReactComponent as Lab } from '../../assets/lab.svg'
import styled from 'styled-components'
import { Title } from '../../components/Title'
import { useInView } from 'react-intersection-observer'
import Block from '../../components/Block'

const PrioritiesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: space-between;
  row-gap: 120px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 90px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 60px;
  }
`

const priorities = [
  {
    Icon: <Smile />,
    items: [
      'Great and friendly community',
      'Responsive moderation',
      'Ongoing user support'
    ]
  },
  {
    Icon: <Monitor />,
    items: [
      'A huge number of monitors',
      'Custom monitors ',
      'Monitor support, high speed'
    ]
  },
  {
    Icon: <Punk />,
    items: [
      'Information on NFT drops',
      'Analytics on NFT’s drops',
      'P2E trends and much more'
    ]
  },
  {
    Icon: <Analys />,
    items: [
      'A good team of analysts',
      'Analysis of current trends',
      'Raffle sheets,drop calendar'
    ]
  },
  {
    Icon: <Gears />,
    items: [
      'Module for NFT, WAX, NEFTY',
      'Autofill on SNKRS, ADIDAS',
      'Other tools'
    ]
  },
  {
    Icon: <Lab />,
    items: [
      'CDEK discount , Nike discount',
      'Collaboration with STOCKship',
      'Soldout marketplace privilege'
    ]
  }
]

export const Priorities: FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <Block>
      <Title>Our Features</Title>
      <PrioritiesGrid ref={ref}>
        {priorities.map((p, i) => (
          <PriorityCard
            key={i}
            Icon={p.Icon}
            items={p.items}
            animation={`fadeIn 1s ease ${i * 0.2}s forwards`}
            inView={inView}
            justifySelf={
              [0, 3].includes(i)
                ? 'start'
                : [2, 5].includes(i)
                ? 'end'
                : 'center'
            }
          />
        ))}
      </PrioritiesGrid>
    </Block>
  )
}
