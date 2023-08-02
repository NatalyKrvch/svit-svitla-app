import styled from 'styled-components';
import { BiShareAlt } from "react-icons/bi";

export const ButtonStyled = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: flex-start;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const ShareIcon = styled(BiShareAlt)`
  -webkit-tap-highlight-color: transparent;
  &:hover {
    opacity: 60%;
  }
  &:active {
    color: var(--brand-blue);
    opacity: 100%;
  }
`