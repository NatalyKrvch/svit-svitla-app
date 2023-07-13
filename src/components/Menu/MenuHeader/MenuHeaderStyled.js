import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const textStyle = `
    font-family: "Inter";
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.4px;

    @media screen and (min-width: 1280px){
        font-size: 24px;
    }
`

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center; 
`

export const StyledUl = styled.ul`
    display: flex;
    color: var(--main-white);
    ${textStyle}
    gap: 40px;
    margin-right: 40px;
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: var(--main-white); 
    padding: 12px 0;

    &:visited {color: var(--main-white);}
    &:hover {color: var(--middle-grey);}
    &.active {
        color: var(--middle-grey);
    }
`
export const LogOutButton = styled.button`
    border: none;
    white-space: nowrap;
    ${textStyle}
    padding: 12px 0;
    color: var(--main-white);
    background-color: var(--dark-blue);

    &:hover {color: var(--middle-grey);}
    
`