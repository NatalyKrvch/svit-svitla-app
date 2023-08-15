import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  /* margin-top: 40px;
  margin-bottom: 32px; */

  @media screen and (min-width: 768px) {
    /* margin-top: 64px;
    margin-bottom: 48px; */
  }

  @media screen and (min-width: 1280px) {
    /* margin-top: 72px;
    margin-bottom: 56px; */
  }
`;
