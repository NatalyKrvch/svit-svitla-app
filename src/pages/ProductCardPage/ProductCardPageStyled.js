import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  align-items: flex-start;
  position: relative;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledH1 = styled.h1`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: -0.4px;

  @media screen and (min-width: 769px){
    font-size: 34px;
    margin-bottom: 8px;
  }
`;

export const StyledP = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.4px;
  margin-bottom: 32px;

  @media screen and (min-width: 769px){
    font-size: 24px;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`
export const CharacteristicsWrapper = styled.div`
  cursor: default;
`