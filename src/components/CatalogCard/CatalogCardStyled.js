import styled from "styled-components";

export const  StyledDiv = styled.div`
width: 156px;
`
export const StyledImg = styled.img`
width: 100%;
`

export const StyledTextWRP = styled.div`
width: 100%;

`
export const StyledP = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.4px;
`
















export const StyledBtnWrp = styled.div`
  width: 156px;
  display: flex;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    gap: 42px;
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

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    align-items: center;
  }
`;