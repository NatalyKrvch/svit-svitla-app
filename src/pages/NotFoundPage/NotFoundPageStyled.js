import styled from "styled-components";

const font = `
font-family: Inter;
line-height: 24px;
letter-spacing: -0.4px;
text-align: center;
color: var(--black);
`

export const PageWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--main-black);
`
export const ImgWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
`
export const ImgStyled = styled.img`
  width: 100%;
`
export const YellowContainer = styled.div`
  background-color: var(--yellow);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeadP = styled.p`
  ${font};
  font-size: 20px;
  font-weight: 600;
  margin: 4px 16px 8px;
`
export const SubheadP = styled.p`
  ${font};
  font-size: 16px;
  font-weight: 400;
  margin: 0 14px 24px;
`
export const ButtonWrapper = styled.div`
  width: 328px;
  margin: 0 16px 35px;
`
