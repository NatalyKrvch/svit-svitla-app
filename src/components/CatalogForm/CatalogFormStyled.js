import styled from "styled-components";

export const StyledFragment = styled.div`
position: relative;
max-width: 328px;
padding: 40px, 16px;
margin-left: auto;
margin-right: auto;
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


export const StyledTitle = styled.h2`
font-weight: 400;
font-size: 24px;
line-height: 120%;
letter-spacing: -0.4px;
margin-bottom: 8px;
text-align: left;

`


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
export const StyledCoverLabel = styled.label`
position: absolute;
height: 24px;
font-size: 12px;
line-height: 2;
color: var(--dark-grey);
background-color: var(--light-blue);
padding: 0 4px;
left: 68px;
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

export const FileInput = styled.input`
display: none;
`
export const FakeInputWrp = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 328px;
height: 56px;
border: 1px solid var(--light-blue);
border-radius: 4px;
padding-left: 8px;
`
export const FakeInputText = styled.p`
font-weight: 600;
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.4px;
`
export const FakeButton = styled.span`
display: block;
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
export const DownloadCatalogButton = styled.button`
display: flex;
gap: 24px;
justify-content: center;
align-items: center;
padding: 12px 24px;
max-width: 328px;
height: 48px;
border: 1px solid var(--dark-blue);
background-color: transparent;
color: black;
font-weight: 600;
font-size: 16px;
line-height: 1.5;
border-radius: 8px;
cursor: pointer;
outline: none;
`




export const StyledImg = styled.img`
display: block;
width: 48px;
height: 56px;
`

export const StyledButtonDelete = styled.button`
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
background-color: var(--warning);
cursor: pointer;
outline: none;

`

export const FakeInputWrpDownload = styled.div`
display: flex;
gap: 24px;
justify-content: center;
align-items: center;
max-width: 328px;
height: 56px;
border: 1px solid var(--light-blue);
border-radius: 4px;
padding-left: 8px;
`

export const FakeButtonDownload = styled.span`
display: block;
display: flex;
align-items: center;
justify-content: center;
width: 48px;
height: 56px;
background-color: transparent;
cursor: pointer;
outline: none;
`
