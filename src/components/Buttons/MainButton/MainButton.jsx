import PropTypes from "prop-types";
import ButtonStyled from "./MainButtonStyled";

//buttonType: primary(blue), secondary(rtansparent), warning(red), filter
function MainButton({ buttonType = "primary", children, ...props }) {
  return (
    <>
      <ButtonStyled buttonType={buttonType} {...props}>
        {children}
      </ButtonStyled>
    </>
  );
}

MainButton.propTypes = {
  buttonType: PropTypes.oneOf(["primary", "secondary", "warning", "filter"]),
  children: PropTypes.node,
};

export default MainButton;
