import styled from 'styled-components';

const Popup = styled.div`
  position: fixed;
  width: 50%;
  height: auto;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`

export default Popup;