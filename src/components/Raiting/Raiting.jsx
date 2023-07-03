import {
  StyledH1,
  PageWrapper,
  StyledP,
  StyledInput,
  StyledButton,
  StyledForm,
  // Star,
} from "./RaitingStyled";
// import star from "../../images/star.svg";
import Sprite from "../../images/symbol-defs.svg";
// import { useDispatch } from "react-redux";

function Raiting() {
  // const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Додаткова логіка для відправки даних
  };

  return (
    <>
      {/* <Star src={star} alt="star" /> */}
      <svg width={50} height={50}>
        <use href={`${Sprite}#icon-star`} style={{ fill: "yellow" }}></use>
      </svg>
      <PageWrapper>
        <StyledH1>Залиште відгук тут</StyledH1>
        <StyledP>Як вам було у Світі світла?</StyledP>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Ваші враження" />
          <StyledButton type="submit">Надіслати</StyledButton>
        </StyledForm>
      </PageWrapper>
    </>
  );
}

export default Raiting;
