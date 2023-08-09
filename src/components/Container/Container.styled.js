import styled from "styled-components"

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 328px;

  @media screen and (min-width: 768px) {
    max-width: 753px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1168px;
  }
`;