import { useNavigate } from "react-router";
import DropdownCardSelector from "../../components/DropdownCardSelect/DropdownCardSelect";
import {
  ButtonWrapper,
  StyledFragment,
  StyledTitle,
  StyledWrp,
  TitleWrp,
} from "./SelectCardPageStyled";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/Filter/selectors";
import Container from "../../components/Container/Container";
import MainButton from "../../components/Buttons/MainButton/MainButton";

const SelectCardPage = () => {
  const navigate = useNavigate();
  const filter = useSelector(selectFilter);

  return (
    <Container>
      <StyledFragment>
        <TitleWrp>
          <StyledTitle>Створити картку</StyledTitle>
        </TitleWrp>
        <StyledWrp>
          <DropdownCardSelector />
        </StyledWrp>
        <ButtonWrapper>
          <MainButton
            type="button"
            disabled={filter === "Вид картки"}
            onClick={() => navigate("/createcard")}
          >
            Далі
          </MainButton>
        </ButtonWrapper>
      </StyledFragment>
    </Container>
  );
};

export default SelectCardPage;
