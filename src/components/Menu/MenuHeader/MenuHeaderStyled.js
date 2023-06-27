import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledUl = styled.ul`
    display: flex;
    color: var(--main-white);
    font-family: "Inter";
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.4px;
    gap: 40px;
    
    @media screen and (min-width: 1280px){
        font-size: 24px;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--main-white); 
    padding: 12px 0;
    &:visited {color: var(--main-white);}
    
`