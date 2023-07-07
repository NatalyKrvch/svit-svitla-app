import Raiting from "../../components/Raiting/Raiting";
import {
  StyledH1,
  PageWrapper,
  StyledP,
  StyledTextarea,
  StyledButton,
  StyledForm,
} from "./FeedbackPageStyled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReview } from "../../redux/Review/reviewOperations";
import emailjs from "emailjs-com";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [selectedStars, setSelectedStars] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFeedback(e.target.value);
    console.log(feedback);
  };

  const handleSelectedStars = (stars) => {
    setSelectedStars(stars);
  };

  const mark = selectedStars[selectedStars.length - 1];

  const review = {
    mark: mark,
    feedback: feedback,
  };
  console.log(review);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReview(review));
    console.log("button is clicked");

    emailjs
      .send(
        "service_t6kj58k",
        "template_sve4rwo",
        {
          from_name: "Svit Svitla Web-service",
          from_email: "nataly.krvch@gmail.com",
          message: JSON.stringify(review),
        },
        "PRsszXr5qEOiC2sof"
      )
      .then((response) => {
        console.log(
          "Повідомлення успішно надіслано!",
          response.status,
          response.text
        );
      })
      .catch((error) => {
        console.error("Помилка під час відправки повідомлення:", error);
      });
  };

  const isButtonDisabled =
    typeof selectedStars === "undefined" || (mark !== 5 && feedback === "");

  const buttonTitle = isButtonDisabled
    ? "Будь ласка, напишіть як ми можемо стати краще"
    : "";

  return (
    <>
      <PageWrapper>
        <StyledH1>Залиште відгук тут</StyledH1>
        <StyledP>Як вам було у Світі світла?</StyledP>
        <Raiting onSelectedStars={handleSelectedStars} />
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextarea
            onChange={handleChange}
            type="text"
            placeholder="Ваші враження"
            id="feedback"
          />
          <StyledButton
            type="submit"
            onSubmit={handleSubmit}
            disabled={isButtonDisabled}
            title={buttonTitle}
          >
            Надіслати
          </StyledButton>
        </StyledForm>
      </PageWrapper>
    </>
  );
}

export default Feedback;
