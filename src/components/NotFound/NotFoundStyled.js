import styled from "styled-components"; 


export const StyledWrp = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const StyledWrpPlug = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`

export const StyledImg = styled.img`
  width: 158px;
  /* height: 117px; */
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 320px;
  }
`;

export const StyledTitle = styled.h2`
  width: 280px;
  color: var(--dark-grey);
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 1,2;
  letter-spacing: -0.4px;
  margin-left: auto;
  margin-right: auto;
`;