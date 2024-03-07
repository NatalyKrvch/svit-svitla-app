import styled from 'styled-components';

export const FormBody = styled.div `
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 769px) {
    gap: 25px;
  }
`
export const Btns = styled.div `
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-end;

  margin-top: 20px;
`