import styled from 'styled-components';
import { BiShareAlt } from "react-icons/bi";

export const ShareIcon = styled(BiShareAlt)`
  width: 24px;
  height: 24px;
  margin: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:hover, &:active {
    color: var(--brand-blue);
    transform: scale(1.1);
  }
`