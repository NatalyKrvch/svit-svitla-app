import PropTypes from "prop-types";
import ButtonStyled from "./MainButtonStyled";

function MainButton({ buttonType = "primary", children, ...props }) {
  //buttonType: primary(blue), secondary(rtansparent), warning(red), filter
  console.log(buttonType);
  return (
    <>
      <ButtonStyled buttonType={buttonType} {...props}>
        {children}
      </ButtonStyled>
    </>
  );
}

MainButton.propTypes = {
    .isRequired,
  buttonType: PropTypes.oneOf(["primary", "secondary", "warning", "filter"]),
  children: PropTypes.string,
};

export default MainButton;
