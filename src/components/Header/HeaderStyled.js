import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: var(--dark-blue);
    height: 56px;
    display: 'flex';

        @media screen and (min-width: 1280px) {
            height: 64px;
        }
`;

export const HeaderWrapper = styled.div`
alignSelf: 'center';
display: 'flex';
justifyContent: 'space-between';
padding: 16px;
`