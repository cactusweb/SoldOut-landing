import styled from 'styled-components'

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  color: #ebe9ff;
  text-shadow: 8px 15px 30px rgba(0, 0, 0, 0.4);
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 120px;

  @media ${props => props.theme.media.tablet} {
    margin-bottom: 100px;
  }

  @media ${props => props.theme.media.phone} {
    margin-bottom: 60px;
  }
`
