import styled from 'styled-components';

const ElementTemp = styled.div`
  min-width: 40%;

  & + canvas {
    max-width: 60%;
    height: auto
  }
`

export default ElementTemp;