import styled from "styled-components";

export const StyledTitle = styled.h2`
font-weight: 400;
font-size: 24px;
line-height: 120%;
letter-spacing: -0.4px;
margin-bottom: 8px;

/* &::after {
    content: "";
    max-width: 328px;
    height: 1px;
    border: 1px solid var(--middle-grey);
} */
`

export const StyledWrpSelector = styled.div`
max-width: 328px;
height: 56px;
background-color: var(--light-blue);
border-radius: 4px 4px 0px 0px;
padding: 16px;
margin-left: auto;
margin-right: auto;
`
export const StyledSelect = styled.select`
border: none;
background-color: transparent;
width: 100%;
height: 100%;
font-size: 16px;
line-height: 150%;
letter-spacing: -0.4px;
margin-bottom: 16px;

`

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 16px;
max-width: 328px;
margin-left: auto;
margin-right: auto;

`
