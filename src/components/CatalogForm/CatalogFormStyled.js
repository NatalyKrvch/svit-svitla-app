import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 328px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    max-width: 495px;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
    gap: 32px;
  }
`;
export const StyledInputWrapper = styled.div`
  position: relative;
  max-width: 328px;
  display: flex;
  align-items: center;
  justify-content: left;

  @media screen and (min-width: 768px) {
    max-width: 495px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
  }
`;

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

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
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
`;

export const StyledInput = styled.input`
  width: 328px;
  height: 56px;
  padding-left: 16px;
  border: 2px solid var(--light-blue);
  border-radius: 4px;
  outline: var(--dark-blue);
  transition: 200ms ease;

  &:hover,
  &:focus {
    border: 2px solid var(--dark-blue);
  }

  @media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const FileInput = styled.input`
  display: none;
`;
export const FakeInputWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 328px;
  height: 56px;
  border: 2px solid var(--light-blue);
  border-radius: 4px;
  padding-left: 8px;
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
export const FakeInputText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;
export const FakeButton = styled.span`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 53px;
  border: 2px solid var(--light-blue);
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  transition: 400ms ease;

  &:hover {
    background-color: var(--pressed-outlined);
  }
`;

// export const SubmitButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 12px 24px;
//   max-width: 328px;
//   height: 48px;
//   background: ${(props) =>
//     props.disabled ? "var(--middle-grey)" : "var(--dark-blue)"};
//   color: white;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: 400ms ease;

//   &:active:not(:disabled) {
//     outline: 2px solid var(--dark-blue);
//     box-shadow: none;
//     background-color: var(--pressed-blue);
//   }

//   @media screen and (min-width: 768px) {
//     max-width: 373px;
//   }

//   @media screen and (min-width: 1280px) {
//   }
// `;
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

  @media screen and (min-width: 768px) {
    max-width: 495px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
  }
`;

export const StyledImg = styled.img`
  display: block;
  width: 48px;
  height: 56px;
  object-fit: cover;
`;

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
  transition: 400ms ease;

  &:hover {
    background-color: var(--warning-pressed);
  }
`;

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

  transition: border-color 400ms ease, border-width 100ms ease;

  &:hover {
    border: 2px solid var(--dark-blue);
  }

  @media screen and (min-width: 768px) {
    max-width: 495px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
  }
`;

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
`;

export const ButtonWrapper = styled.div`
  width: 328px;

  @media screen and (min-width: 768px) {
    width: 365px;
  }

  @media screen and (min-width: 1280px) {
    width: 373px;
  }
`