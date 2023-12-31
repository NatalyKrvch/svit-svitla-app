import styled from "styled-components";

export const StyledContainer = styled.div`
  /* max-width: 360px;


  @media screen and (min-width: 768px) {
    max-width: 834px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
  } */
`;

export const StyledTitleWrp = styled.div`
  max-width: 328px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 754px;
    margin: 0;
    border-bottom: 1px solid var(--middle-grey);
  }

  @media screen and (min-width: 1280px) {
    max-width: 1168px;
  }
`;

export const StyledTitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -0.4px;
  margin-bottom: 8px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 328px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-top: 40px;
    max-width: 624px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 671px;
    gap: 24px;
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  width: 328px;
  /* height: ${({ isLoggedIn }) => (isLoggedIn ? "auto" : "56px")}; */
  display: grid;
  /* align-items: ${({ isLoggedIn }) => (isLoggedIn ? "center" : "flex-start")};
  justify-content: ${({ isLoggedIn }) =>
    isLoggedIn ? "left" : "space-evenly"}; */
  grid-template-columns: ${({ isMobile, isTablet, isLoggedIn }) =>
    isLoggedIn && isMobile
      ? "328px"
      : isLoggedIn && isTablet
      ? "624px"
      : isLoggedIn
      ? "556px"
      : !isLoggedIn && isMobile
      ? "70px 220px 48px"
      : !isLoggedIn && isTablet
      ? "128px 448px 48px"
      : "128px 495px 48px"};

      grid-template-rows: ${({ isLoggedIn }) => (isLoggedIn ? "auto" : "64px")};

  @media screen and (min-width: 768px) {
    width: 624px;
    /* gap: 18px; */
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
    /* justify-content: space-evenly; */
    line-height: 1;
    letter-spacing: -0.4px;
  }
`;

export const StyledLabel = styled.label`
  position: ${({ isLoggedIn }) => (isLoggedIn ? "absolute" : "static")};
  /* height: ${({ isLoggedIn }) => (isLoggedIn ? "24px" : "48px")}; */
  /* width: ${({ isLoggedIn, isMobile }) =>
    isLoggedIn ? "auto" : isMobile ? "105px" : "128px"}; */
  font-size: ${({ isLoggedIn }) => (isLoggedIn ? "12px" : "16px")};
  line-height: ${({ isLoggedIn }) => (isLoggedIn ? "1.5" : "none")};
  color: ${({ isLoggedIn }) =>
    isLoggedIn ? "var(--dark-grey)" : "var(--main-black)"};
  background-color: ${({ isLoggedIn }) =>
    isLoggedIn ? "var(--light-blue)" : "var(--main-white)"};
  padding: ${({ isLoggedIn }) => (isLoggedIn ? "0 4px" : "4.5px 4px")};
  left: 12px;
  top: -8px;

  @media screen and (min-width: 768px) {
    text-align: start;
    font-size: 16px;
    /* line-height: 1,5; */
    letter-spacing: -0.4px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const StyledCoverLabel = styled.label`
  position: absolute;
  height: 24px;
  font-size: 12px;
  line-height: 2;
  color: var(--dark-grey);
  background-color: var(--light-blue);
  padding: 0 4px;
  left: 68px;
  top: -8px;
`;

export const StyledInput = styled.span`
  display: block;
  width: 328px;
  padding: ${({ isLoggedIn }) => (isLoggedIn ? "16px" : "4px")};
  text-align: ${({ isLoggedIn }) => (isLoggedIn ? "left" : "start")};
  border: ${({ isLoggedIn }) =>
    isLoggedIn ? "1px solid var(--light-blue)" : "none"};
  border-radius: 4px;
  outline: var(--dark-blue);

  @media screen and (min-width: 768px) {
    height: auto;
    width: 624px;
    outline: none;
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const StyledInputIban = styled.span`
  display: block;
  font-weight: 600;
  display: block;
  width: 328px;
  padding: ${({ isLoggedIn }) => (isLoggedIn ? "16px" : "4px")};
  padding-right: ${({ isLoggedIn }) => (isLoggedIn ? "0" : "4px")};
  text-align: ${({ isLoggedIn }) => (isLoggedIn ? "left" : "start")};
  border: ${({ isLoggedIn }) =>
    isLoggedIn ? "1px solid var(--light-blue)" : "none"};
  border-radius: 4px;
  outline: var(--dark-blue);

  @media screen and (min-width: 768px) {
    /* height: auto; */
    width: 624px;
    outline: none;
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const FakeInputWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 328px;
  /* height: 56px; */
  border: 1px solid var(--light-blue);
  border-radius: 8px;
  padding-left: 8px;

  @media screen and (min-width: 768px) {
    max-width: 624px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
  }
`;
export const FakeInputText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    max-width: 624px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
    height: 56px;
  }
`;
export const FakeButton = styled.button`
  width: 48px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  transition: 400ms ease;

  &:hover svg {
    stroke: rgba(0, 0, 0, 0.6);
  }

  &:active {
   
   svg {
      stroke: var(--dark-blue);
    }
  }

  @media screen and (min-width: 768px) {
    outline: none;
    border: none;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 49px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

export const FakeButtonDelete = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    outline: none;
    border: none;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const StyledSpan = styled.span`
  display: block;
  width: 328px;
  height: 56px;
  padding: ${({ isLoggedIn }) => (isLoggedIn ? "8px 16px" : "4px")};
  text-align: ${({ isLoggedIn }) => (isLoggedIn ? "left" : "start")};
  border: ${({ isLoggedIn }) =>
    isLoggedIn ? "1px solid var(--light-blue)" : "none"};
  border-radius: 4px;
  outline: var(--dark-blue);
  white-space: pre-wrap;
  &::after {
    content: "";
    white-space: pre;
  }
`;
export const StyledSpanIban = styled.span`
  font-weight: 600;
  display: block;
  width: 328px;
  height: 56px;
  padding: ${({ isLoggedIn }) => (isLoggedIn ? "8px 16px" : "4px")};
  text-align: ${({ isLoggedIn }) => (isLoggedIn ? "left" : "start")};
  border: ${({ isLoggedIn }) =>
    isLoggedIn ? "1px solid var(--light-blue)" : "none"};
  border-radius: 4px;
  outline: var(--dark-blue);
  white-space: pre-wrap;
  &::after {
    content: "";
    white-space: pre;
  }
`;
