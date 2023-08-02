import styled from "styled-components";

export const StyledUl = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 16px;
margin: 0 auto;

@media screen and (min-width: 768px) {
    gap: 24px;
  }

`