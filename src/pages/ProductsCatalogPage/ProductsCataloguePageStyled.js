import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  line-height: 1, 2;
  letter-spacing: -0.4px;
  text-align: left;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 1;
  }

  @media screen and (min-width: 1440px) {
    font-size: 48px;
    line-height: 1, 2;
  }
`;

export const StyledButton = styled.button`
  width: 165px;
  height: 48px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1, 5;
  letter-spacing: -0.4px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  border: 1px solid var(--dark-blue);
  border-radius: 8px;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    width: 235px;
    height: 48px;
    font-size: 20px;
    gap: 30px;
  }

`;
