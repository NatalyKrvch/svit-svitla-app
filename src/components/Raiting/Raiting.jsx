import {
  StyledH1,
  PageWrapper,
  StyledP,
  StyledInput,
  StyledButton,
  StyledForm,
} from "./RaitingStyled";

function Raiting() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Додаткова логіка для відправки даних
  };

  return (
    <>
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
