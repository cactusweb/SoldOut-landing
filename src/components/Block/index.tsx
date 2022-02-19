import styled from 'styled-components'

const Block = styled.div`
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

export default Block
