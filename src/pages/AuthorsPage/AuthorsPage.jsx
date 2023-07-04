import {
  GridWrapper,
  Item,
  BoldItem,
  PageWrapper,
  Img,
} from "./AuthorsPageStyled";
import { StyledH1 } from "../../components/Raiting/RaitingStyled";
import authorsList from "./authorsList.json";
import linkedInIcon from "../../images/linkedin.svg";

function Authors() {
  return (
    <>
      <PageWrapper>
        <StyledH1>Автори веб-сервісу</StyledH1>
        <GridWrapper>
          {authorsList.map((author, index) => (
            <>
              <BoldItem key={index}>{author.Position}</BoldItem>
              <Item>{author.Name}</Item>
              <Item>
                <a href={author.LinkedIn}>
                  <Img src={linkedInIcon} alt="LinkedIn" />
                </a>
              </Item>
            </>
          ))}
        </GridWrapper>
      </PageWrapper>
    </>
  );
}

export default Authors;
