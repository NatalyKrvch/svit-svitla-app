import styled from "styled-components";

export const CardWrp = styled.li`
  display: flex;
  flex-direction: column;
  width: 156px;
  height: 351px;

  @media screen and (min-width: 769px) {
    width: 235px;
    height: 460px;
  }

  @media screen and (min-width: 1281px) {
    width: 274px;
    height: 530px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  & > button {
    height: 48px;
  }
`;

export const ImgWrp = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: 1px;
  overflow: hidden;
  transition: 400ms ease;
  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: var(--box-shadow);
  }
`;

export const StyledImg = styled.img`
  width: 156px;
  height: 208px;
  object-fit: contain;

  @media screen and (min-width: 769px) {
    width: 235px;
    height: 314px;
  }

  @media screen and (min-width: 1281px) {
    width: 274px;
    height: 367px;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 156px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-top: 4px;
  flex-grow: 1;
  cursor: default;

  @media screen and (min-width: 769px) {
    width: 235px;
  }

  @media screen and (min-width: 1281px) {
    width: 274px;
  }
`;

export const StyledProductName = styled.div`
  width: 156px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 769px) {
    width: 235px;
    font-size: 22px;
  }

  @media screen and (min-width: 1281px) {
    width: 274px;
    font-size: 22px;
  }
`;

export const StyledP = styled.p`
width: 156px;
  font-size: 16px;
  line-height: 1, 5;
  letter-spacing: -0.4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 769px) {
     width: 235px;
  }

  @media screen and (min-width: 1281px) {
    font-size: 20px;
    line-height: 1.5;
     width: 274px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  width: 156px;
  height: 48px;
  margin-top: 4px;
  background-color: var(--dark-blue);
  border-radius: 8px;
  outline: none;
  color: var(--main-white);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.4px;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    width: 235px;
    font-size: 20px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1281px) {
    width: 274px;
  }
`;

export const StyledBtnWrp = styled.div`
  width: 156px;
  display: flex;
  align-items: flex-start;
  @media screen and (min-width: 769px) {
    gap: 42px;
  }
`;

export const StyledBtn = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: flex-start;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: 400ms ease;

  &:hover svg {
    fill: rgba(0, 0, 0, 0.6);
  }
  &:active svg {
    fill: var(--brand-blue);
  }

  @media screen and (min-width: 769px) {
  }

  @media screen and (min-width: 1281px) {
    align-items: center;
  }
`;

// export const StyledBtnEdit = styled(RiPencilLine)`
//   width: 24px;
//   height: 24px;
//   display: flex;
//   align-items: flex-start;
//   border: none;
//   background-color: transparent;
//   outline: none;
//   cursor: pointer;
//   transition: 200ms ease;
//   -webkit-tap-highlight-color: transparent;

//   &:hover  {
//     fill: rgba(0, 0, 0, 0.6);
//   }

//   &:active {
//     fill: var(--brand-blue);
//   }

//   @media screen and (min-width: 769px) {
//   }

//   @media screen and (min-width: 1281px) {
//     /* align-items: center; */
//     margin-top: 12px;
//   }
// `;

// export const StyledBtnDelete= styled(RiDeleteBin6Line)`
//   width: 24px;
//   height: 24px;
//   display: flex;
//   align-items: flex-start;
//   border: none;
//   background-color: transparent;
//   outline: none;
//   cursor: pointer;
//   transition: 200ms ease;
//   -webkit-tap-highlight-color: transparent;

//   &:hover  {
//     fill: rgba(0, 0, 0, 0.6);
//   }

//   &:active {
//     fill: var(--brand-blue);
//   }

//   @media screen and (min-width: 769px) {
//   }

//   @media screen and (min-width: 1281px) {
//     /* align-items: center; */
//     margin-top: 12px;
//   }
// `;
