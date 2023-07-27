import styled from 'styled-components';

const font = `
font-family: Inter;
font-weight: 600;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.4px;
`
const ButtonStyled = styled.button`
  height: 48px;
  width: 100%;
  padding: 12px auto;
  border-radius: 8px;
  cursor: pointer;
  ${font}
  border: ${props =>
    props.buttonType === "primary" || props.buttonType === "warning"
      ? "none"
      : "1px solid var(--dark-blue)"
  };
  background-color: ${props =>
    props.buttonType === "primary"
      ? "var(--dark-blue)"
      : props.buttonType === "warning"
        ? "var(--warning)"
        : "transparent"
  };
  color: ${props =>
    props.buttonType === "primary" || props.buttonType === "warning"
      ? "var(--main-white)"
      : " var(--black)"
  };

  &[disabled] {
    cursor: not-allowed;
    background-color: ${props =>
    props.buttonType === "primary" || props.buttonType === "warning"
      ? "var(--middle-grey)"
      : "transparent"
  };
    border:  ${props =>
    props.buttonType === "secondary" || props.buttonType === "filter"
      ? "1px solid var(--middle-grey)"
      : "none"
  };
    color: ${props =>
    props.buttonType === "secondary" || props.buttonType === "filter"
      ? "var(--middle-grey)"
      : "var(--main-white)"
  };
  }

  &:active:not(:disabled) {
    outline: 2px solid var(--dark-blue);
    box-shadow: none;
    background-color: ${props =>
    props.buttonType === "primary"
      ? "var(--pressed-blue)"
      : props.buttonType === "warning"
        ? "var(--warning-pressed)"
        : props.buttonType === "secondary"
          ? "var(--light-blue)"
          : "var(--pressed-outlined)"
  };
  }

  @media screen and (min-width: 769px) {
    height: 56px;
    font-size: 20px;
  }
`
export default ButtonStyled;