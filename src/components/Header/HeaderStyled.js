import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledHeader = styled.header`
    background-color: var(--dark-blue);
    height: 56px;

        @media screen and (min-width: 1280px) {
            height: 64px;
        }
`;

export const HeaderWrapper = styled.div`

    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 56px;
    padding: 0 5%;
 
        @media screen and (min-width: 1280px) {
            height: 64px;
        }
`;

export const WrapperDiv = styled.div`
    margin: 0;
    padding: 12px 0;
    cursor: pointer;
`;

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