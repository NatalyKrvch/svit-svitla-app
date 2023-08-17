import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 156px;
  height: 315px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    width: 235px;
    height: 425px;
  }

  @media screen and (min-width: 1281px) {
    width: 274px;
    height: 485px;
  }
`;

export const ImgWrp = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: 1px;
  transition: 400ms ease;
  &:hover,
  &:focus {
    box-shadow: var(--box-shadow);
  }
`;
export const StyledImg = styled.img`
  width: 156px;
  height: 208px;
  object-fit: cover;

  @media screen and (min-width: 769px) {
    width: 235px;
    height: 314px;
  }

  @media screen and (min-width: 1281px) {
    width: 274px;
    height: 367px;
  }
`;

export const StyledTextWRP = styled.div`
  flex-grow: 1;
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;
export const StyledP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.4px;
  flex-grow: 1;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;

  @media screen and (min-width: 769px) {
    width: 235px;
  }

  @media screen and (min-width: 1281px) {
    font-size: 20px;
    letter-spacing: 0.25px;
  }
`;

export const StyledBtnWrp = styled.div`
  width: 156px;
  display: flex;
  align-items: flex-start;

  @media screen and (min-width: 769px) {
    width: 235px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1281px) {
    width: 274px;
  }
`;

export const StyledBtn = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: flex-start;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: 1s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover svg {
    fill: rgba(0, 0, 0, 0.6);
  }

  &:active svg {
    fill: var(--brand-blue);
  }

  @media screen and (min-width: 769px) {
  }

  @media screen and (min-width: 1281px) {
    /* align-items: center; */
  }
`;

export const StyledBtnDownload = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: flex-start;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: 200ms ease;
  -webkit-tap-highlight-color: transparent;

  &:hover svg {
    stroke: rgba(0, 0, 0, 0.6);
  }

  &:active svg {
    stroke: var(--brand-blue);
  }

  @media screen and (min-width: 769px) {
  }

  @media screen and (min-width: 1281px) {
    /* align-items: center; */
    /* margin-top: 12px; */
  }
`;

