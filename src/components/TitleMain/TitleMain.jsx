import { StyledTitle, TitleWrp } from "./TitleMainStyled";

const TitleMain = ({ text }) => {
  return (
    <>
      <TitleWrp>
        <StyledTitle>{text}</StyledTitle>
      </TitleWrp>
    </>
  );
};
export default TitleMain;
