import styled from "styled-components";

export const STyledContainer = styled.div``;

export const StyledDiv = styled.div`
  width: 328px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 753px;
    margin-left: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 1168px;
  }
`;
export const StyledInputWrp = styled.div`
  display: flex;
  padding: 4px 16px;
  width: 328px;
  height: 56px;
  border: 2px solid var(--middle-grey);
  border-radius: 4px 4px 0px 0px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 491px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
    height: 64px;
    font-weight: 500;
    line-height: 29px;
    margin-bottom: 48px;
  }
`;
export const StyledBtnSearch = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.7s ease;

  &:hover svg {
    transform: scale(1.5);
    fill: var(--pressed-blue);
  }
`;

export const StyledBtnDeleteSearch = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: scale cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    scale: 1.2;
  }
`;

export const StyledInput = styled.input`
  width: 232px;
  outline: none;
  border: none;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  @media screen and (min-width: 768px) {
    width: 395px;
  }

  @media screen and (min-width: 1280px) {
    width: 508px;
    font-weight: 500;
    line-height: 29px;
  }
`;

export const StyledH2 = styled.h2`
  width: 328px;
  font-size: 24px;
  font-weight: 400;
  line-height: 1, 2;
  letter-spacing: -0.4px;
  margin-bottom: 16px;
  cursor: default;

  @media screen and (min-width: 768px) {
    width: 490px;
    font-size: 32px;
    line-height: 1; 
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
    font-size: 48px;
    line-height: 0, 5;
    margin-bottom: 32px;
  }
`;
