import styled from "styled-components"

export const ContainerWrapper = styled.div`
  /* flex: 1; */
  padding: 40px 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 64px 44px;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1280px) {
    padding: 72px 136px;
  }
`;