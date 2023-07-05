import {
  StyledH1,
  PageWrapper,
  StyledP,
  StyledInput,
  StyledButton,
  StyledForm,
  StarsContainer,
} from "./RaitingStyled";
import { useState } from "react";
import Sprite from "../../images/symbol-defs.svg";
import { useMediaRules } from "../../hooks/useMediaRules";
// import { useDispatch } from "react-redux";

function Raiting() {
  // const dispatch = useDispatch();

  const [selectedStars, setSelectedStars] = useState([]);
  // const [feedback, setFeedback] = useState("");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Додаткова логіка для відправки даних
  };

  return (
    <>
      <PageWrapper>
        <StyledH1>Залиште відгук тут</StyledH1>
        <StyledP>Як вам було у Світі світла?</StyledP>
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
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Ваші враження" />
          <StyledButton type="submit">Надіслати</StyledButton>
        </StyledForm>
      </PageWrapper>
    </>
  );
}

export default Raiting;
