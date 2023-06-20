import styled from "styled-components";

export const StyledFragment = styled.div`
position: relative;
max-width: 328px;
padding: 40px, 16px;
margin-left: auto;
margin-right: auto;
`

export const StyledTitle = styled.h1`
font-size: 32px;
line-height: 1;
letter-spacing: -0.4px;
text-align: left;
`
export const TitleWrp = styled.div`
  max-width: 328px;
  position: relative;

  &::after {
    content: ' ';
    position: absolute;
    width: 328px;
    bottom: -40px;
    left: 0;
    height: 1px;
    border: 1px solid var(--middle-grey);
    
    margin-bottom: 32px;
  }
`;

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 16px;
max-width: 328px;
margin-left: auto;
margin-right: auto;
margin-top: 32px;

`
export const StyledInputWrapper = styled.div`
position: relative;
max-width: 328px;
height: 56px;
display: flex;
align-items: center;
justify-content: left;
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

export const SubmitButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 12px 24px;
max-width: 328px;
height: 48px;
background: var(--dark-blue);
color: white;
border-radius: 8px;
cursor: pointer;
`

export const ButtonEye = styled.button`
position: absolute;
right: 0;
top: 0;
width: 48px;
height: 48px;
display: flex;
align-items: center;
justify-content: center;
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

`
export const PasswordWrp = styled.div`
position: relative;

`
