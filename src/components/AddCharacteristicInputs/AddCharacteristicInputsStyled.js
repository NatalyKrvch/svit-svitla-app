import styled from "styled-components";

export const StyledInputWrapper = styled.div`
position: relative;
max-width: 328px;
height: 56px;

`

export const StyledLabel = styled.label`
position: absolute;
height: 24px;
font-size: 12px;
line-height: 2;
color: var(--dark-grey);
background-color: var(--light-blue);
padding: 0 4px;
left: 12px;
top: -8px;

`
export const StyledInput = styled.input`

width: 328px;
height: 56px;
padding: 16px;
border: 1px solid var(--light-blue);
border-radius: 4px;
outline: var(--dark-blue);

`
export const StyledButton = styled.button`
position: absolute;
top: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;
width: 48px;
height: 56px;
border: 1px solid var(--light-blue);
border-radius: 4px;
background-color: transparent;
cursor: pointer;
outline: none;
`