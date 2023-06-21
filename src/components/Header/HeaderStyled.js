import styled from 'styled-components';


export const StyledHeader = styled.header`
    background-color: var(--dark-blue);
    height: 56px;
    display: 'flex';
    justifyContent: 'space-between';
    alignItems: 'center';

        @media screen and (min-width: 1280px) {
            height: 64px;
        }
`;

export const HeaderWrapper = styled.div`
    display: 'flex';
    justifyContent: 'space-between';
    alignSelf: 'center';
    height: 56px;
 
        @media screen and (min-width: 1280px) {
            height: 64px;
        }
`;

export const LogoWrapper = styled.div`
    display: 'flex';
    alignSelf: 'center';
`;

export const Image = styled.img`
    
    height: auto;
`;

export const BurgerWrapper = styled.div``
