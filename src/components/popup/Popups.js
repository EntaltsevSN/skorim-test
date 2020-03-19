import styled from 'styled-components';

const Popups = styled.div`
  opacity: 0;
  pointer-events: none;

  ${props => (props.visible !== undefined) && `
    opacity: 1;
    pointer-events: all;
    `}
`

export default Popups;