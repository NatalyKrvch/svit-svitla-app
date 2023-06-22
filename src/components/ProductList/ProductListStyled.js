import styled from "styled-components";

export const StyledList = styled.ul`
  max-width: 328px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 834px) {
    max-height: 753px;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1168px;
  }
`;
