import {
  StyledH1,
  PageWrapper,
  StyledP,
  StyledTextarea,
  StyledButton,
  StyledForm,
  StarsContainer,
} from "./RaitingStyled";
import { useState, useEffect } from "react";
import Sprite from "../../images/symbol-defs.svg";
import { useMediaRules } from "../../hooks/useMediaRules";
// import { useDispatch } from "react-redux";
// import { addReview } from "../../redux/Review/reviewOperations";

function Raiting() {
  const [selectedStars, setSelectedStars] = useState([]);
  const [feedback, setFeedback] = useState("");

  const { isTablet, isDesktop } = useMediaRules();

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addReview(reviewMark, feedback));
  // }, [dispatch, reviewMark, feedback]);

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

  const reviewMark = selectedStars[selectedStars.length - 1];

  console.log(selectedStars);

  const sendMail = () => {
    var link =
      "mailto:svitsvitlacn@ukr.net" +
      "&subject=" +
      encodeURIComponent("Feedback") +
      "&body=" +
      encodeURIComponent(document.getElementById("feedback").value);
    window.location.href = link;
    console.log("button is clicked");
  };

  const handleChange = (event) => {
    setFeedback(event.target.value);
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
          <StyledTextarea
            onChange={handleChange}
            type="text"
            placeholder="Ваші враження"
            id="feedback"
          />
          <StyledButton type="submit" onClick={sendMail}>
            Надіслати
          </StyledButton>
        </StyledForm>
      </PageWrapper>
    </>
  );
}

export default Raiting;
