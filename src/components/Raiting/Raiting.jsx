import { StarsContainer } from "./RaitingStyled";
import { useMediaRules } from "../../hooks/useMediaRules";
import Sprite from "../../images/symbol-defs.svg";
import PropTypes from "prop-types";

const STAR_COUNTER = [1, 2, 3, 4, 5];
let STAR_SIZE = 36;
const SELECTED_STAR_COLOR = '#FFE34E';
const DEFAULT_STAR_COLOR = '#DBE4E8';

function Raiting({ onSelectedStars, selectedStars }) {
  const { isTablet, isDesktop } = useMediaRules();

  if (isDesktop || isTablet) {
    STAR_SIZE = 48;
  }

  const handleStarClick = (starID) => {
    const clickedIndex = STAR_COUNTER.indexOf(+starID);
    const selectedStarsArr = STAR_COUNTER.slice(0, clickedIndex + 1);

    if (!starID) return;
  
    onSelectedStars(selectedStarsArr);
  };

  return (
    <>
      <StarsContainer
        onClick={(e) => handleStarClick(e.target.id)}
      >
        {STAR_COUNTER.map((key) => {
          const isSelected = selectedStars.includes(key);
  
          return (
            <svg
              key={key}
              width={STAR_SIZE}
              height={STAR_SIZE}
              id={key}
              style={{ cursor: "pointer" }}
            >
              <use
                id={key}
                href={`${Sprite}#icon-star`}
                style={{
                  fill: isSelected ? SELECTED_STAR_COLOR : DEFAULT_STAR_COLOR,
                }}
              />
            </svg>
          );
        })}
      </StarsContainer>
    </>
  );
}

Raiting.propTypes = {
  onSelectedStars: PropTypes.func.isRequired,
  selectedStars: PropTypes.array.isRequired,
};

export default Raiting;
