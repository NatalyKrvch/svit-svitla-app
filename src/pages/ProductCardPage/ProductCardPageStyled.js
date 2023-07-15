import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 16px 32px;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const StyledH2 = styled.h2`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: -0.4px;
`;

export const StyledP = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.4px;
  margin-bottom: 16px;
`

export const ImagesContainer = styled.div`
  width: 328px;
  height: 437px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CoverImgContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RestImgsContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const LowerImageContainer = styled.div`
  width: 70px;
  height: 93px;
  margin: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LowerImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;