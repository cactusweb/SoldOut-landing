import styled, { css } from 'styled-components'

export const Button = styled.a<{ disabled?: boolean }>`
  display: block;
  padding: 0px 35px;
  text-transform: uppercase;
  height: 40px;
  border: 1px solid #501cd5;
  border-radius: 8px;
  background: none;
  text-shadow: 8px 15px 30px rgba(0, 0, 0, 0.4);
  color: #ebe9ff;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  ${props =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: default;
    `};

  ${props =>
    !props.disabled &&
    css`
      &:hover {
        background: #501cd5;
        border: 1px solid #501cd5;
      }
    `}
`
