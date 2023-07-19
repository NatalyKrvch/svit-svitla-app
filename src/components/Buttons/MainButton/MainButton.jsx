import {
  PrimaryButton,
  SecondaryButton,
  WarningButton,
  FilterButton,
} from "./MainButtonStyled";
import PropTypes from "prop-types";

function MainButton({ buttonType, width, text, ...props }) {
  //buttonType: primary(blue), secondary(rtansparent), warning(red), filter

  return (
    <>
      {buttonType === "primary" && (
        <PrimaryButton width={width} {...props}>
          {text}
        </PrimaryButton>
      )}
      {buttonType === "secondary" && (
        <SecondaryButton width={width} {...props}>
          {text}
        </SecondaryButton>
      )}
      {buttonType === "warning" && (
        <WarningButton width={width} {...props}>
          {text}
        </WarningButton>
      )}
      {buttonType === "filter" && (
        <FilterButton width={width} {...props}>
          {text}
        </FilterButton>
      )}
    </>
  );
}

MainButton.propTypes = {
  buttonType: PropTypes.oneOf(["primary", "secondary", "warning", "filter"])
    .isRequired,
  width: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MainButton;
