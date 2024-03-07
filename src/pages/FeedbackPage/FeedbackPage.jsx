import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../redux/Review/reviewOperations";
import { getCurrentReviews, isModalOpen } from "../../redux/Review/reviewSelectors";
import { toast } from "react-toastify";
import { setModalOpen } from "../../redux/Review/reviewReducer";
import Raiting from "../../components/Raiting/Raiting";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import Modal from "../../components/Modal/Modal/Modal";
import Container from "../../components/Container/Container";
import emailjs from "emailjs-com";
import {
  StyledH1,
  PageWrapper,
  StyledP,
  StyledTextarea,
  ButtonWrapper,
  StyledForm,
  Warning,
} from "./FeedbackPageStyled";

const ONE_DAY = 86400000;
const MAX_CHAR = 500;

const serviceID = import.meta.env.VITE_SERVICEID;
const templateID = import.meta.env.VITE_TEMPLATEID;
const keyID = import.meta.env.VITE_KEYID;
const userID = import.meta.env.VITE_USERID

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [selectedStars, setSelectedStars] = useState([]);
  const [isTextareaEmpty, setIsTextareaEmpty] = useState(false);
  
  const dispatch = useDispatch();
  const currentReview = useSelector(getCurrentReviews);
  const isModalVisible = useSelector(isModalOpen);
  const currentDate = new Date().getTime();
  const currentReviewDate = currentReview?.lastDate;
  const dateDifference = currentDate - currentReviewDate;
  const isButtonDisabled = !selectedStars.length;

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

    if (feedback.trim() === '') {
      setIsTextareaEmpty(true);
      return;
    }

    if (typeof currentReviewDate === "undefined" || dateDifference > ONE_DAY) {
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
          userID,
        )
        .then((response) => {
          toast.success("Відгук успішно надіслано");
          console.log(
            response.status,
            response.text,
          );
        })
        .catch((error) => {
          toast.error("Помилка під час відправки відгука");
          console.error(error);
        });

      setFeedback('');
      setSelectedStars([]);
    } else {
      toast.error("Ви вже залишили свій відгук сьогодні");
      return;
    }
  };

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
            maxLength={MAX_CHAR}
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
      {isModalVisible && (
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
