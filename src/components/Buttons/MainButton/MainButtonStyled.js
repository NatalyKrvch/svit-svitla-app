import styled from 'styled-components';

export const PrimaryButton = styled.button`
  background-color: var(--dark-blue);
  height: 48px;
  width: ${(props) => props.width};
  padding: 12px auto;
  border-radius: 8px;
  border: none;
  color: var(--main-white);
  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  cursor: pointer;

  &[disabled] {
    background-color: var(--middle-grey);
    cursor: not-allowed; 
  }

  &:active:not(:disabled) {
    background-color: var(--pressed-blue);
    border: 2px solid var(--dark-blue);
  }

  @media screen and (min-width: 769px) {
    height: 56px;
    /* width: ; */
    font-size: 20px;
  }

  @media screen and (min-width: 1281px) {
    /* width: ; */
  }
`

export const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: 1px solid var(--dark-blue);
  color: var(--black);

  &[disabled] {
    background-color: transparent;
  }

  &:active:not(:disabled) {
    background-color: var(--light-blue);
    color: var(--middle-grey);
    border: var(--middle-grey);
  }
`

export const FilterButton = styled(SecondaryButton)`
  font-weight: 400;
   
  &:active:not(:disabled) {
    background-color: var(--pressed-outlined);
  }
`

export const WarningButton = styled(PrimaryButton)`
  background-color: var(--warning);

  &:active:not(:disabled) {
    background-color: var(--warning-pressed);
  }
`