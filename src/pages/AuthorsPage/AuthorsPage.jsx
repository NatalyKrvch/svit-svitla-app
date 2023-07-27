import React from "react";
import {
  GridWrapper,
  Item,
  BoldItem,
  PageWrapper,
  Img,
} from "./AuthorsPageStyled";
import { StyledH1 } from "../../pages/FeedbackPage/FeedbackPageStyled";
import authorsList from "./authorsList.json";
import linkedInIcon from "../../images/linkedin.svg";
import Wrapper from "../../components/Container/Container";
import { nanoid } from "nanoid";

function Authors() {
  return (
    <>
      <Wrapper>
        <PageWrapper>
          <StyledH1>Автори веб-сервісу</StyledH1>
          <GridWrapper>
            {authorsList.map((author) => (
              <React.Fragment key={nanoid()}>
                <BoldItem>{author.Position}</BoldItem>
                <Item>{author.Name}</Item>
                <Item>
                  <a href={author.LinkedIn} target="_blank" rel="noreferrer">
                    <Img src={linkedInIcon} alt="LinkedIn" />
                  </a>
                </Item>
              </React.Fragment>
            ))}
          </GridWrapper>
        </PageWrapper>
      </Wrapper>
    </>
  );
}

export default Authors;
