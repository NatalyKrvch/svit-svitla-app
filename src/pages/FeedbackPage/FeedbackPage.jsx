import Raiting from "../../components/Raiting/Raiting";
import {
  StyledH1,
  PageWrapper,
  StyledP,
  StyledTextarea,
  ButtonWrapper,
  StyledForm,
  Warning,
} from "./FeedbackPageStyled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../redux/Review/reviewOperations";
import {
  getCurrentReviews,
  isModalOpen,
} from "../../redux/Review/reviewSelectors";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import Modal from "../../components/Modal/Modal/Modal";
import { setModalOpen } from "../../redux/Review/reviewReducer";
import Container from "../../components/Container/Container";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function Feedback() {
  const serviceID = import.meta.env.VITE_SERVICEID;
  const templateID = import.meta.env.VITE_TEMPLATEID;
  const keyID = import.meta.env.VITE_KEYID;
  const userID = import.meta.env.VITE_USERID

  const [feedback, setFeedback] = useState("");
  const [selectedStars, setSelectedStars] = useState([]);
  const [isTextareaEmpty, setIsTextareaEmpty] = useState(false);
  const currentReview = useSelector(getCurrentReviews);
  const modalOpen = useSelector(isModalOpen);
  const currentReviewDate = currentReview?.lastDate;
  const maxChar = 500;
  const dispatch = useDispatch();
  const currentDate = new Date().getTime();
  const dateDifference = currentDate - currentReviewDate;
  const oneDay = 86400000;

  const handleChange = (e) => {
    setFeedback(e.target.value);
    setIsTextareaEmpty(false);
  };

  const handleSelectedStars = (stars) => {
    setSelectedStars(stars);
  };

  const mark = selectedStars[selectedStars.length - 1];
  const review = {
    reviewMark: mark,
    reviewText: feedback,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedback.trim() === "") {
      setIsTextareaEmpty(true);
      return;
    }

    if (typeof currentReviewDate === "undefined" || dateDifference > oneDay) {
      dispatch(addReview(review));

      emailjs
        .send(
          serviceID,
          templateID,
          {
            from_name: "Svit Svitla Web-service",
            from_email: "nataly.krvch@gmail.com",
            message: JSON.stringify(review),
          },
          keyID,
          userID
        )
        .then((response) => {
          toast.success("Повідомлення успішно надіслано!");
          console.log(
            "Повідомлення успішно надіслано!",
            response.status,
            response.text
          );
        })
        .catch((error) => {
          toast.error("Помилка під час відправки повідомлення!");
          console.error("Помилка під час відправки повідомлення:", error);
        });
      setFeedback("");
      setSelectedStars([]);
    } else {
      toast.error("Сьогодні, ви вже залишили свій відгук!");
      return;
    }
  };

  const isButtonDisabled =
    typeof selectedStars === "undefined" || selectedStars < 1;

  const closeModal = () => {
    dispatch(setModalOpen(false));
  };
  
  return (
    <Container>
      <PageWrapper>
        <StyledH1>Залиште відгук тут</StyledH1>
        <StyledP>Як вам було у Світі світла?</StyledP>
        <Raiting
          onSelectedStars={handleSelectedStars}
          selectedStars={selectedStars}
        />
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextarea
            onChange={handleChange}
            value={feedback}
            type="text"
            placeholder="Ваші враження"
            id="feedback"
            maxLength={maxChar}
            isTextareaEmpty={isTextareaEmpty}
          />
          {isTextareaEmpty && (
            <Warning>Будь ласка, заповніть поле відгуку</Warning>
          )}
          <ButtonWrapper>
            <MainButton
              buttonType={"primary"}
              type="submit"
              onSubmit={handleSubmit}
              disabled={isButtonDisabled}
            >
              Надіслати
            </MainButton>
          </ButtonWrapper>
        </StyledForm>
      </PageWrapper>
      {modalOpen && (
        <Modal
          title="Дякуємо!"
          text="Стаємо краще завдяки вам"
          onCloseModal={closeModal}
        />
      )}
    </Container>
  );
}

export default Feedback;
