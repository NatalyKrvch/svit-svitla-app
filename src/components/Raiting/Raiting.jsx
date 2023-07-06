import { StarsContainer } from "./RaitingStyled";
import { useState } from "react";
import Sprite from "../../images/symbol-defs.svg";
import { useMediaRules } from "../../hooks/useMediaRules";

function Raiting() {
  const [selectedStars, setSelectedStars] = useState([]);

  const { isTablet, isDesktop } = useMediaRules();

  const starCounter = [1, 2, 3, 4, 5];
  let starSize = 36;
  if (isDesktop || isTablet) {
    starSize = 48;
  }

  const handleStarClick = (starKey) => {
    const clickedIndex = starCounter.indexOf(starKey);
    const selectedStars = starCounter.slice(0, clickedIndex + 1);
    setSelectedStars(selectedStars);
  };

  // const reviewMark = selectedStars[selectedStars.length - 1];

  return (
    <>
      <StarsContainer>
        {starCounter.map((key) => {
          const isSelected = selectedStars.includes(key);
          return (
            <svg
              key={key}
              width={starSize}
              height={starSize}
              onClick={() => handleStarClick(key)}
              style={{ cursor: "pointer" }}
            >
              <use
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
