import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Main = styled.main`
    flex: 1;  
    display: flex;
    padding-top: 40px;
    /* padding: 40px 16px;
    position: relative; */
    

    @media screen and (min-width: 768px) {
        padding-top: 64px;
        /* padding: 64px 44px; */
    }

  @media screen and (min-width: 1280px) {
    padding-top: 72px;
        /* padding: 72px 136px; */
    }
`