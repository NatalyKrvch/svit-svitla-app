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

  @media screen and (min-width: 769px){
    font-size: 24px;
    line-height: 1;
  }

  @media screen and (min-width: 1281px){
    font-size: 32px;
    line-height: 0.75;
  }
`
// export const StyledP = styled.p`
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 1,5;
//   letter-spacing: -0.4px;
//   margin-bottom: 16px;

//   @media screen and (min-width: 768px) {
//     font-size: 20px;
//     margin-bottom: 16px;
//   }

//   @media screen and (min-width: 1281px) {
//     font-size: 24px;
//   }
// `
export const StyledPrice = styled.span`
  ${LargeFontSet}
  display: inline-block;
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1281px) {
    font-size: 32px;
    margin-left: 24px;
  }
`
export const StyledPCountry = styled.p`
  ${SmallFontSet}
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1281px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`
export const StyledSpanCountry = styled.span`
  margin-left: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-left: 24px;
  }

  @media screen and (min-width: 1281px) {
    font-size: 24px;
    margin-left: 24px;
  }
`
export const StyledUl = styled.ul`
  width: 328px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media screen and (min-width: 769px){
    width: 365px;
    font-size: 20px;
    gap: 16px;
  }
  @media screen and (min-width: 1281px){
    width: 473px;
  }
`
export const StyledLi = styled.li`
  width: 100%;
  display: flex;
`
export const StyledPAttribute = styled.p`
  width: 70px;
  ${SmallFontSet}

  @media screen and (min-width: 769px) {
    font-size: 20px;
    width: 106px;
  }

  @media screen and (min-width: 1281px) {
    font-size: 24px;
    width: 175px;
  }
`
export const StyledSpanAttribute = styled.span`
  width: 242px;
  margin-left: 16px;
  ${SmallFontSet}

  @media screen and (min-width: 769px){
    font-size: 20px;
    margin-left: 24px;
  }
  
  @media screen and (min-width: 1281px) {
    font-size: 24px;
    margin-left: 24px;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 45px;
`
export const GridItem = styled.div`
  border: 1px solid black;
  text-align: center;
`
