import styled from 'styled-components'

export const Button = styled.button`
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

  &:hover {
    background: #501cd5;
    border: 1px solid #501cd5;
  }
`
