import styled from 'styled-components';
import { Link } from "react-router-dom";

const font = `
    font-family: Inter;
    font-size: 10px;
    font-weight: 400;
    line-height: 1,5;
    letter-spacing: -0.4px;
`

export const StyledFooter = styled.footer`
    background-color: var(--dark-blue);
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 152px;

    @media screen and (min-width: 769px) {
        min-height: 175px;
    }
`
export const LogoWrapper = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;

    @media screen and (min-width: 769px) {
        top: 25px;
        left: 25px;
    }
    
    @media screen and (min-width: 1281px) {
        top: 25px;
        left: 100px;
    }
`

export const StyledInstaA = styled.a`
    display: none;
    position: absolute;
    cursor: pointer;

    @media screen and (max-width: 769px) {
      top: 90px;
      left: 7px;
    }

    @media screen and (min-width: 769px) {
      top: 10px;
      right: 10px;
    }

    @media screen and (min-width: 1281px) {
        top: 10px;
        right: 100px;
    }
`
export const InformationContainer = styled.div`
    position: absolute;
    left: 70px;
    top: 16px;
    color: var(--light-blue);
    display: flex;
    flex-flow: column wrap;
    gap: 6px;
    ${font}

    @media screen and (min-width: 769px) {
        font-weight: 500;
        font-size: 14px;
        line-height: 29px;
        left: 90px;
    }

    @media screen and (min-width: 1281px) {
        font-weight: 500;
        font-size: 16px;
        left: 250px;
    }
`
export const GridContainer = styled.div`
    margin-left: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 16px 24px;
`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    cursor: default;
`
export const StyledSpan = styled.span`
    height: 15px;
    min-width: 70px;

    @media screen and  (min-width: 769px) {
        height: 29px;
        min-width: 86px;
        margin-right: 10px;
    }
`
export const StyledLink = styled(Link)`
    padding: 12px 0;
    text-decoration: underline;
    color: var(--light-blue); 
    &:visited {color: var(--light-blue);}

    @media screen and (min-width: 769px) {
        margin-left: 40px;
        font-size: 14px;
        line-height: 24px;
    }
`
export const StyledA = styled.a`
    color: var(--light-blue); 
    &:visited {color: var(--light-blue);}
    &:hover {text-decoration: underline;}
`