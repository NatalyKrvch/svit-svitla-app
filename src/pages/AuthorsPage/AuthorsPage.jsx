import { PageWrapper, Item, BoldItem } from "./AuthorsPageStyled";
import authorsList from "./authorsList.json";
import linkedInIcon from "../../images/linkedin.svg";

function Authors() {
  return (
    <>
      <PageWrapper>
        {authorsList.map((author, index) => (
          <>
            <BoldItem key={index}>{author.Position}</BoldItem>
            <Item key={index}>{author.Name}</Item>
            <Item key={index}>
              <a href={author.LinkedIn}>
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
            </Item>
          </>
        ))}
      </PageWrapper>
    </>
  );
}

export default Authors;
