import { StarsContainer } from "./RaitingStyled";
import { useState } from "react";
import Sprite from "../../images/symbol-defs.svg";
import { useMediaRules } from "../../hooks/useMediaRules";
import PropTypes from "prop-types";

function Raiting(props) {
  const { onSelectedStars } = props;
  Raiting.propTypes = {
    onSelectedStars: PropTypes.func.isRequired,
  };

  const [selectedStars, setSelectedStars] = useState([]);
  const { isTablet, isDesktop } = useMediaRules();
  const starCounter = [1, 2, 3, 4, 5];

  let starSize = 36;
  if (isDesktop || isTablet) {
    starSize = 48;
  }

  const handleStarClick = (starKey) => {
    const clickedIndex = starCounter.indexOf(+starKey);
    const selectedStars = starCounter.slice(0, clickedIndex + 1);
    setSelectedStars(selectedStars);
    onSelectedStars(selectedStars);
  };

  return (
    <>
      <StarsContainer
        onClick={(e) => {
          handleStarClick(e.target.id);
        }}
      >
        {starCounter.map((key) => {
          const isSelected = selectedStars.includes(key);
          return (
            <svg
              key={key}
              width={starSize}
              height={starSize}
              id={key}
              style={{ cursor: "pointer" }}
            >
              <use
                id={key}
                href={`${Sprite}#icon-star`}
                style={{ fill: isSelected ? "#FFE34E" : "#DBE4E8" }}
              />
            </svg>
          );
        })}
      </StarsContainer>
    </>
  );
}

export default Raiting;
