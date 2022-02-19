import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { Title } from '../../components/Title'
import { getImages } from '../../constants/images'
import _ from 'lodash'
import Block from '../../components/Block'

// const Container = styled.div`

//   & > :nth-child(1) {
//     transform: scale(0.8) translateY(0);
//     animation-name: first;
//     animation-duration: 10s;
//     animation-iteration-count: infinite;
//   }

//   & > :nth-child(2) {
//     animation-name: second;
//     animation-duration: 10s;
//     animation-iteration-count: infinite;
//   }

//   & > :nth-child(3) {
//     transform: scale(0.8);
//     animation-name: third;
//     animation-duration: 10s;
//     animation-iteration-count: infinite;
//   }

//   & > :nth-child(4) {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     transform: scale(0.8) translateY(25px);
//     opacity: 0;
//     animation-name: fourth;
//     animation-duration: 10s;
//     animation-iteration-count: infinite;
//   }

//   & > :nth-child(5) {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     transform: scale(0.8) translateY(25px);
//     opacity: 0;
//     animation-name: fourth;
//     animation-duration: 10s;
//     animation-delay: 2s;
//     animation-iteration-count: infinite;
//   }

//   @keyframes first {
//     0% {
//       transform: scale(0.8) translateY(0);
//       opacity: 1;
//     }
//     20% {
//       transform: scale(0.8) translateY(-25px);
//       opacity: 0;
//     }
//     40% {
//       transform: scale(0.8) translateY(450px);
//       opacity: 0;
//     }
//     60% {
//       transform: scale(0.8) translateY(425px);
//       opacity: 1;
//     }
//     80% {
//       transform: scale(1) translateY(170px);
//     }
//     100% {
//       transform: scale(0.8) translateY(0);
//     }
//   }

//   @keyframes second {
//     0% {
//       transform: scale(1) translateY(0);
//     }
//     20% {
//       transform: scale(0.8) translateY(-212px);
//       opacity: 1;
//     }
//     40% {
//       transform: scale(0.8) translateY(-237px);
//       opacity: 0;
//     }
//     60% {
//       transform: scale(0.8) translateY(237px);
//       opacity: 0;
//     }
//     80% {
//       transform: scale(0.8) translateY(212px);

//       opacity: 1;
//     }
//     100% {
//       transform: scale(1) translateY(0);
//     }
//   }

//   @keyframes third {
//     0% {
//       transform: scale(0.8) translateY(0);
//     }
//     20% {
//       transform: scale(1) translateY(-170px);
//     }
//     40% {
//       transform: scale(0.8) translateY(-425px);
//       opacity: 1;
//     }
//     60% {
//       transform: scale(0.8) translateY(-450px);
//       opacity: 0;
//     }
//     80% {
//       transform: scale(0.8) translateY(25px);
//       opacity: 0;
//     }
//     100% {
//       transform: scale(0.8) translateY(0);
//       opacity: 1;
//     }
//   }

//   @keyframes fourth {
//     0% {
//       transform: scale(0.8) translateY(25px);
//       opacity: 0;
//     }
//     20% {
//       transform: scale(0.8) translateY(0);
//       opacity: 1;
//     }
//     40% {
//       transform: scale(1) translateY(-170px);
//     }
//     60% {
//       transform: scale(0.8) translateY(-425px);
//       opacity: 1;
//     }
//     80% {
//       transform: scale(0.8) translateY(-450px);
//       opacity: 0;
//     }
//     100% {
//       transform: scale(0.8) translateY(25px);
//       opacity: 0;
//     }
//   }
// `
// const Row = styled.div<{ animation?: number }>`

//   ${props =>
//     props.animation &&
//     css`

//     `}

// `

// export const Successes: FC = () => {
//   const [images3, setImages3] = useState<string[]>([])
//   const [images6, setImages6] = useState<string[]>([])
//   const [images9, setImages9] = useState<string[]>([])
//   const [images12, setImages12] = useState<string[]>([])
//   const [images15, setImages15] = useState<string[]>([])

//   useEffect(() => {
//     console.log(successes)
//   }, [successes])

//   // let image3count = useRef(0)
//   // useEffect(() => {
//   //   setInterval(() => {
//   //     setImages3(
//   //       successes.slice(15 + image3count.current, 18 + image3count.current)
//   //     )
//   //   }, 4000)
//   // }, [images3])

//   return (
//     <Block>
//       <Container>
//         <Row>
//           {successes[0].map(i => (
//             <Success key={i}>
//               <Image src={i} />
//             </Success>
//           ))}
//         </Row>
//         <Row>
//           {successes[1].map(i => (
//             <Success key={i}>
//               <Image src={i} />
//             </Success>
//           ))}
//         </Row>
//         <Row>
//           {successes[2].map(i => (
//             <Success key={i}>
//               <Image src={i} />
//             </Success>
//           ))}
//         </Row>
//         <Row>
//           {successes[3].map(i => (
//             <Success key={i}>
//               <Image src={i} />
//             </Success>
//           ))}
//         </Row>
//         {successes.slice(4).map((row, i) => (
//           <Row key={i} animation={2 + i * 2}>
//             {row.map((s, i) => (
//               <Success key={i}>
//                 <Image src={s} />
//               </Success>
//             ))}
//           </Row>
//         ))}
//       </Container>
//     </Block>
//   )
// }

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
    setInterval(() => {
      setAnimation(() => false)
    }, 70000)
  }, [])

  useEffect(() => {
    setInterval(() => {
      setAnimation(() => true)
    }, 71000)
  }, [])

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
