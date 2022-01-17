import styled from 'styled-components'

export const Cell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.size * 0.1 + 'px'};
    height: ${props => (props.size - 10) / 3 + 'px'};
    font-size: ${props => props.size * 0.1 + 'px'};
    background: ${props => props.bg};
    color: cornflowerblue;
`