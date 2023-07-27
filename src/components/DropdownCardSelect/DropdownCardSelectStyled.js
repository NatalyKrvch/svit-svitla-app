import styled from "styled-components";

export const StyledWrpSelector = styled.div`
  width: 328px;
  background-color: transparent;
  border: 2px solid var(--light-blue);
  border-radius: 4px 4px 0px 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 495px;
    margin-left: 0;
    
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const StyledList = styled.ul`
margin-top: -15px;
`


export const StyledButtonSelect = styled.button`
width: 328px;
height: 56px;
font-size: 16px;
line-height: 1,5;
letter-spacing: -0.4px;
padding: 16px;
display: flex;
border: none;
align-items: center;
justify-content: space-between;
outline: none;
cursor: pointer;
background-color: transparent;
transition: 400ms ease;

&:active {
  outline: 2px solid var(--dark-blue);
  box-shadow: none;
  background-color: var(--pressed-blue);
}

@media screen and (min-width: 768px) {
    width: 495px;
    
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`

export const StyledOptions = styled.li`
  max-width: 328px;
  padding: 20px 16px;
  font-size: 16px;
  line-height: 1,5;
  text-align: left;
  letter-spacing: -0.4px;
  background: var(--light-blue);
  box-shadow: var(--box-shadow);
  border-radius: 4px;
  border: 2px solid transparent;
  transition: 200ms ease;
  

&:hover,
&:focus {
  border: 2px solid var(--dark-blue);
}


  @media screen and (min-width: 768px) {
    max-width: 495px;
    
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
  }
`;

// transition: 200ms ease;

// &:hover {
//   border: 2px solid var(--dark-blue);
// }
