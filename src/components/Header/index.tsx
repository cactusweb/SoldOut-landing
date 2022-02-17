import React, { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Button } from '../Button'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  position: relative;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 75px;
  text-align: center;
  color: #ebe9ff;
  text-shadow: 8px 15px 30px rgba(0, 0, 0, 0.4);
  margin: 20px 0 0 0;
  margin-bottom: 25px;

  @media ${props => props.theme.media.phone} {
    font-size: 35px;
  }
`

const DashboardButton = styled(Button)`
  position: absolute;
  top: 25px;
  right: 100px;

  @media ${props => props.theme.media.phone} {
    top: 20px;
    right: 20px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${props => props.theme.media.phone} {
    width: 220px;
  }
`
type Props = {
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Header: FC<Props> = ({ onMouseMove }) => {
  return (
    <Container onMouseMove={onMouseMove}>
      <LogoContainer>
        <Logo width="100%" height="100%" />
      </LogoContainer>
      <Title>SOLDOUT COOK</Title>
      <Button>OUT OF STOCK</Button>
      <DashboardButton>DASHBOARD</DashboardButton>
    </Container>
  )
}

export default Header
