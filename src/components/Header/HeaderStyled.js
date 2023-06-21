import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: var(--dark-blue);
    height: 56px;
    display: 'flex';
    justify-content: center;
    align-items: center;

        @media screen and (min-width: 1280px) {
            height: 64px;
        }
`;

export const HeaderWrapper = styled.div`
    display: 'flex';
    justifyContent: 'space-between';
    height: 56px;
        
        @media screen and (min-width: 1280px) {
            height: 64px;
        }
`;

export const LogoWrapper = styled.div`
        
`
