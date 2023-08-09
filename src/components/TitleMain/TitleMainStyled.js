import styled from "styled-components";



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
`

export const StyledTitle = styled.h1`
font-size: 32px;
line-height: 1;
font-style: normal;
font-weight: 400;
letter-spacing: -0.4px;
text-align: left;
margin-bottom: 16px;

@media screen and (min-width: 768px) {
  font-size: 48px;
  line-height: 1.2;
}
`;
