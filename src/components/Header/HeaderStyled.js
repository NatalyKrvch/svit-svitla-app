import styled from 'styled-components';


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
    padding: 0;
`;

export const StyledUl = styled.ul`
    display: flex;
    gap: 40px;
    font-family: "Inter";
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.4px;
    color: var(--main-white);
`