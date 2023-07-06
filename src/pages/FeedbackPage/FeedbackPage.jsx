import Raiting from "../../components/Raiting/Raiting";
import {
  StyledH1,
  PageWrapper,
  StyledP,
  StyledTextarea,
  StyledButton,
  StyledForm,
} from "./FeedbackPageStyled";
import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addReview } from "../../redux/Review/reviewOperations";

function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Додаткова логіка для відправки даних
  };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addReview(reviewMark, feedback));
  // }, [dispatch, reviewMark, feedback]);

  return (
    <>
      <PageWrapper>
        <StyledH1>Залиште відгук тут</StyledH1>
        <StyledP>Як вам було у Світі світла?</StyledP>
        <Raiting />
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextarea
            onChange={handleChange}
            type="text"
            placeholder="Ваші враження"
            id="feedback"
          />
          <StyledButton type="submit" onSubmit={handleSubmit}>
            Надіслати
          </StyledButton>
        </StyledForm>
      </PageWrapper>
    </>
  );
}

export default Feedback;
