import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: var(--dark-blue);
    margin: 20px 0 0 0;

    @media screen and (min-width: 300px) and (max-width: 767px) {
        height: 152px;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1279px) {
        height: 149px;
    }

    @media screen and (min-width: 1280px) {
        height: 160px;
    }
`
export const FooterWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
`
export const LogoWrapper = styled.div`
    position: absolute;

    @media screen and (min-width: 300px) and (max-width: 767px) {
        height: 48px;
        width: 48px;
        top: 15px;
        left: 15px;
    }
`

//замінити на кнопку, доробити адаптацію
export const InstaWrapper = styled.div`   
    position: absolute;

    @media screen and (min-width: 300px) and (max-width: 767px) {
        height: 48px;
        width: 48px;
        left: 15px;
        bottom: 20px;
    }
`
export const InformationContainer = styled.div`
    position: absolute;
    left: 100px;
    top: 15px;
    display: flex;
    flex-direction: column;
    color: var(--light-blue);
`
export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;

`

