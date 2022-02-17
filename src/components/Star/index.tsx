import React, { FC } from 'react'
import styled from 'styled-components'
import StarSvg from '../../assets/star.svg'

type Props = {
  width?: string
  height?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
}

const StyledStar = styled.div<Props>`
  position: absolute;
  background-image: url(${StarSvg});
  background-position: center center;
  background-size: contain;
  width: ${props => props.width};
  height: ${props => props.height};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
`

const Star: FC<Props> = ({ ...props }) => {
  return <StyledStar {...props} />
}

export default Star
