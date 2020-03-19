import styled from 'styled-components';

const ElementButton = styled.button`
  background: none;
  border: 0;
  width: 16px;
  height: 16px;
  position: relative;
  transform: rotate(45deg);
  position: absolute;
  right: 32px;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    background-color: #252831;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:before {
    width: 100%;
    height: 2px;
    top: calc(50% - 1px);
  }

  &:after {
    width: 2px;
    height: 100%;
    left: calc(50% - 1px);
  }
`

export default ElementButton;