import styled from "styled-components"

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  width: 100%;
  max-width: 328px;

  @media screen and (min-width: 768px) {
    max-width: 753px;
    padding: 64px 0;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1168px;
    padding: 72px 0;
  }
`;