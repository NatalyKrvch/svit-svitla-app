import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 40px 16px 32px;

  @media screen and (min-width: 769px) and (max-width: 1280px){
    margin: 64px 40px 227px;
  }

  @media screen and (min-width: 1281px){
    margin: 72px 136px 56px;
  }
`

export const StyledH1 = styled.h1`
  font-weight: 400;
  letter-spacing: -0.4px;
  font-size: 32px;
  line-height: 32px;
  border-bottom: 1px solid var(--middle-grey);
  padding-bottom: 8px;
  width: 100%;

  @media screen and (min-width: 769px) {
    font-size: 48px;
    line-height: 57.6px;
  }    
`
export const StyledP = styled.p`
  margin: 32px 0 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.4px;

  @media screen and (min-width: 769px) and (max-width: 1280px){
    margin: 40px 0 24px;
    font-size: 24px;
    line-height: 36px;
  }  

  @media screen and (min-width: 1281px) {
    margin: 48px 0 24px;
    font-size: 24px;
    line-height: 36px;
  }
`
