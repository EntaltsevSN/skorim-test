import styled from 'styled-components';

const PopupButton = styled.form`
  border: 0;
  padding: 16px;
  background-color: #ffa600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 16px;

  &:hover {
    background-color: #e69500;
  }
`

export default PopupButton;