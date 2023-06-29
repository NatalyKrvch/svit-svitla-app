import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuBurgerContainer = styled.div`
    background-color: var(--dark-blue);
    min-width: 100%;
    min-height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 10;
`
export const CrossWrapper = styled.div`
    padding: 12px;
    position: absolute;
    top: 16px;
    right: 16px;
`

export const StyledUl = styled.ul`
    margin-top: 84px;
    min-width: 328px;
    color: var(--main-white);
    font-family: "Inter";
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.4px;
`
export const StyledLi = styled.li`
    height: 40px;
    border-bottom: 1px solid var(--main-white);
    margin-bottom: 32px;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--main-white); 
    &:visited {color: var(--main-white);}
    
`