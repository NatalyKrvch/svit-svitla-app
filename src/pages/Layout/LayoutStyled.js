import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  padding-top: 40px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 72px;
    padding-bottom: 56px;
  }
`;
