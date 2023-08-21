import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

export const StyledFragment = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 328px;

  @media screen and (min-width: 768px) {
    width: 753px;
  }

  @media screen and (min-width: 1280px) {
    width: 1168px;
    margin-bottom: 40px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  line-height: 1, 2;
  letter-spacing: -0.4px;
  text-align: left;
  margin-bottom: 16px;
  cursor: default;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 1, 2;
    margin-bottom: 32px;
  }
`;

export const StyledButton = styled.button`
  width: auto;
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
  transition:  400ms ease;

  &:hover {
    background-color: var(--dark-blue);
    color: var(--main-white);
    & svg{
      fill: var(--main-white);
    }
  }

  @media screen and (min-width: 768px) {
    /* width: 235px; */
    height: 48px;
    font-size: 20px;
    gap: 30px;
  }
`;

export const BtnWrp = styled.div`
min-width: 165px;
  height: 48px;
  margin-top: 16px;
  margin-bottom: 16px; 

  @media screen and (min-width: 768px){
    min-width: 235px;
    max-width: 300px;
    margin-top: 24px;
    margin-bottom: 32px;
  }
`

export const StyledInputWrp = styled.div`
  display: flex;
  padding: 4px 16px;
  width: 328px;
  height: 56px;
  align-items: center;
  border: 2px solid var(--middle-grey);
  border-radius: 4px 4px 0px 0px;
  margin-bottom: 16px;

    &:focus {
    border-color: var(--dark-blue);
  }



  @media screen and (min-width: 768px) {
    width: 491px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
    height: 64px;
    font-weight: 500;
    line-height: 29px;
    margin-bottom: 40px;
  }
`;
export const StyledBtnSearch = styled(AiOutlineSearch)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover  {
    transform: scale(1.5);
    fill: rgba(0, 0, 0, 0.6);
  }

  &:active {
    fill: var(--brand-blue);
  }
`;

export const StyledBtnDeleteSearch = styled(RxCrossCircled)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.2);
    fill: rgba(0, 0, 0, 0.6);
  }

  &:active {
    fill: var(--brand-blue);
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