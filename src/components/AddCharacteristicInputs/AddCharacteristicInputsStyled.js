import styled from "styled-components";

export const StyledInputWrapper = styled.div`
position: relative;
width: 328px;
/* height: 56px; */
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }

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
/* height: 56px; */
padding-top: 20px;
padding-bottom: 20px;
padding-left: 16px;
padding-right: 55px;
border: 1px solid var(--light-blue);
border-radius: 4px;
transition: 200ms ease;

&:hover,
&:focus {
  border: 1px solid var(--dark-blue);
}


@media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }

`
export const StyledButton = styled.button`
display: block;
position: absolute;
top: 2px;
right: 2px;
display: flex;
align-items: center;
justify-content: center;
width: 48px;
height: 56px;
border: 2px solid var(--light-blue);
border-radius: 4px;
background-color: transparent;
cursor: pointer;
outline: none;
transition: 400ms ease;

&:hover {
  background-color: var(--pressed-outlined);
}
`

export const StyledUlCharacteristics = styled.ul`
width: 328px;
display: flex;
flex-direction: column;
gap: 16px;

@media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }

`
// export const StyledLi = styled.li`
// display: flex;
// flex-direction: column;
// gap: 16px;
// `