import styled from 'styled-components'

export const Square = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-row: repeat(3, 1fr);
  width: ${props => props.size + 'px'};
  gap: 5px;
  background: cornflowerblue;
  margin: 20px auto;
`