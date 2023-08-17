import styled from "styled-components";

const LargeFontSet = `
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.4px;
`
const SmallFontSet = `
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 1,5;
`
export const Styledh2 = styled.h2`
  ${LargeFontSet}
  line-height: 1,2;
  margin-bottom: 24px;

  @media screen and (min-width: 768px){
    font-size: 24px;
    line-height: 1;
  }

  @media screen and (min-width: 1280px){
    font-size: 28px;
    line-height: 0.75;
    margin-bottom: 48px;
  }
`
export const StyledPrice = styled.span`
  ${LargeFontSet}
  display: inline-block;
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 42px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    margin-bottom: 52px;
  }
`
export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px; 

   @media screen and (min-width: 768px){
    font-size: 20px;
    gap: 16px;
  }
`
export const StyledLi = styled.li`
  width: 100%;
  display: flex;
`
export const StyledPAttribute = styled.p`
  display: inline-block;
  min-width: 150px;
  max-width: 150px;
  margin-bottom: 18px;
  ${SmallFontSet}

  @media screen and (min-width: 768px) {
    font-size: 20px;
    min-width: 190px;
    max-width: 190px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    min-width: 240px;
    max-width: 240px;
  }
`
export const StyledSpanAttribute = styled.span`
  display: inline-block;
  margin-left: 16px;
  ${SmallFontSet}

  @media screen and (min-width: 768px){
    font-size: 20px;
    margin-left: 24px;
  }
  
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    margin-left: 48px;
  }
`