import styled from "styled-components";

export const StyledFragment = styled.div`
  width: 328px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 495px;
    margin-left: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 609px;
  }
`;

export const StyledH = styled.h2`
  font-weight: 400;
  font-size: 22px;
  line-height: 1, 2;
  letter-spacing: -0.4px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;
export const StyledTitleProduct = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 1, 2;
  letter-spacing: -0.4px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
  }
`;

export const StyledP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1, 5;
  letter-spacing: -0.4px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
export const StyledInputWrapper = styled.div`
  position: relative;
  width: 328px;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const StyledInputWrapperPhoto = styled.li`
  position: relative;
  width: 328px;
  /* height: 56px; */
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
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

export const StyledImg = styled.img`
  display: block;
  width: 48px;
  height: 56px;
  object-fit: cover;
`;

export const StyledInput = styled.input`
  width: 328px;
  /* height: 56px; */
  padding: 20px 16px;
  border: 1px solid var(--light-blue);
  border-radius: 4px;
  outline: var(--dark-blue);
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

export const LabelFileInput = styled.label`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 48px;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FakeInputWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 328px;
  /* height: 56px; */
  border: 1px solid var(--light-blue);
  border-radius: 4px;
  padding-left: 8px;
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
`;

export const FakeInputText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.4px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

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
`;

// export const Styledh4 = styled.h4`
// font-weight: 600;
// font-size: 16px;
// line-height: 1,2;
// letter-spacing: -0.4px;
// margin-top: 32px;
// margin-bottom: 16px;

// `

// export const StyledPriceCurrency = styled.span`
// font-weight: 600;
// font-size: 16px;
// line-height: 1.5;
// letter-spacing: -0.4px;
// margin-left: 48px;
// width: 95px;

// `
// export const StyledPCountry = styled.p`
// font-weight: 400;
// font-size: 14px;
// line-height: 1,5;
// letter-spacing: 0.25px;
// `
// export const StyledSpanCountry = styled.span`
// margin-left: 16px;
// `
// export const StyledUl = styled.ul`
// width: 328px;
// display: flex;
// flex-direction: column;
// gap: 8px;
// margin-bottom: 16px;
// `
// export const StyledLi = styled.li`
// width: 100%;
// display: flex;
// `

// export const StyledPAttribute = styled.p`
// width: 70px;
// font-weight: 400;
// font-size: 14px;
// line-height: 1,5;
// letter-spacing: 0.25px;
// `

// export const StyledSpanAttribute = styled.span`
// width: 242px;
// margin-left: 16px;
// font-weight: 400;
// font-size: 14px;
// line-height: 1,5;
// letter-spacing: 0.25px;
// `

// export const SubmitButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 12px 24px;
//   max-width: 328px;
//   height: 48px;
//   background-color: ${(props) =>
//     props.disabled ? "var(--middle-grey)" : "var(--dark-blue)"};
//   color: white;
//   border-radius: 8px;
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
`;

export const StyledSelect = styled.select`
  width: 328px;
  height: 56px;
  padding: 16px;
  border: 1px solid var(--light-blue);
  border-radius: 4px;
  outline: var(--dark-blue);
  @media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const StyledWrpSelector = styled.div`
  position: relative;
  width: 328px;
  background-color: transparent;
  border-radius: 4px 4px 0px 0px;
  margin-left: auto;
  border: 1px solid var(--light-blue);
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: 200ms ease;

  &:hover,
  &:focus {
    border: 1px solid var(--dark-blue);
  }

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
`;

export const StyledButtonSelect = styled.span`
  display: block;
  width: 328px;
  height: 56px;
  font-size: 16px;
  line-height: 1, 5;
  letter-spacing: -0.4px;
  padding: 16px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: space-between;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 495px;
  }

  @media screen and (min-width: 1280px) {
    width: 572px;
  }
`;

export const StyledOptions = styled.li`
  max-width: 328px;
  height: 73px;
  padding: 8px 12px;
  font-size: 16px;
  /* margin-left: auto; */
  line-height: 1, 5;
  text-align: right;
  letter-spacing: -0.4px;
  background: var(--light-blue);
  /* box-shadow: var(--box-shadow);
  border-radius: 4px; */
  border-bottom: 1px solid var(--middle-grey);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 200ms ease;
  &:hover,
  &:focus {
    border: 1px solid var(--dark-blue);
  }

  @media screen and (min-width: 768px) {
    max-width: 495px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 572px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 328px;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    width: 365px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 373px;
    margin-top: 32px;
  }
`;
