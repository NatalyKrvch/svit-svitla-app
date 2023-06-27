import styled from "styled-components";

export const StyledFragment = styled.div`
margin-left: auto;
margin-right: auto;
padding: 40px 16px;

`

export const StyledH = styled.h2`
font-weight: 400;
font-size: 24px;
line-height: 1,2;
letter-spacing: -0.4px;
margin-bottom: 16px;

`
export const StyledTitleProduct = styled.h3`
font-weight: 400;
font-size: 24px;
line-height: 1,2;
letter-spacing: -0.4px;
margin-bottom: 4px;
`

export const StyledP = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 1,5;
letter-spacing: -0.4px;
margin-bottom: 32px;
`
export const StyledInputWrapper = styled.div`
  position: relative;
  max-width: 328px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    max-width: 495px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
  }
`;


export const StyledInputWrapperPhoto = styled.li`
  position: relative;
  max-width: 328px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    max-width: 495px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
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

export const StyledImg = styled.img`
  display: block;
  width: 48px;
  height: 56px;
`;

export const StyledInput = styled.input`
  width: 328px;
  height: 56px;
  padding: 16px;
  border: 1px solid var(--light-blue);
  border-radius: 4px;
  outline: var(--dark-blue);
  @media screen and (min-width: 768px) {
   width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const StyledButtonDelete = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 56px;
  border: 1px solid var(--light-blue);
  border-radius: 4px;
  background-color: var(--warning);
  cursor: pointer;
  outline: none;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FakeInputWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 328px;
  height: 56px;
  border: 1px solid var(--light-blue);
  border-radius: 4px;
  padding-left: 8px;

  @media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
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
     width: 495px;
  }
  
  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const FakeButton = styled.span`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 56px;
  border: 1px solid var(--light-blue);
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

export const Styledh4 = styled.h4`
font-weight: 600;
font-size: 16px;
line-height: 1,2;
letter-spacing: -0.4px;
margin-top: 32px;
margin-bottom: 16px;


`

export const StyledPriceCurrency = styled.span`
font-weight: 600;
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.4px;
margin-left: 48px;
width: 95px;

`
export const StyledPCountry = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 1,5;
letter-spacing: 0.25px;
`
export const StyledSpanCountry = styled.span`
margin-left: 16px;
`
export const StyledUl = styled.ul`
width: 328px;
display: flex;
flex-direction: column;
gap: 8px;
margin-bottom: 16px;
`
export const StyledLi = styled.li`
width: 100%;
display: flex;
`

export const StyledPAttribute = styled.p`
width: 70px;
font-weight: 400;
font-size: 14px;
line-height: 1,5;
letter-spacing: 0.25px;
`

export const StyledSpanAttribute = styled.span`
margin-left: 16px;
font-weight: 400;
font-size: 14px;
line-height: 1,5;
letter-spacing: 0.25px;
`