import styled from "styled-components";

export const StyledFragment = styled.div`
  /* position: relative;

  @media screen and (min-width: 768px) {
    width: 754px;
  }

  @media screen and (min-width: 1280px) {
    width: 1168px;
  } */
`;

export const TitleWrp = styled.div`
  max-width: 320px;
  position: relative;
  border-bottom: 1px solid var(--middle-grey);

  @media screen and (min-width: 768px) {
    max-width: 750px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1155px;
  }

  /* &::after {
    content: " ";
    position: absolute;
    width: 328px;
    bottom: -40px;
    left: 0;
    border: 1px solid var(--middle-grey);
    margin-bottom: 32px;
   */
/* 
  @media screen and (min-width: 768px) {
    width: 754px;
  }

  @media screen and (min-width: 1280px) {
    width: 1168px;
  } */
/* } */
`;

export const StyledTitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: -0.4px;
  margin-bottom: 8px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 16px;
  }
`;
