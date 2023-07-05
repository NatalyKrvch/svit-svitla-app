

import {
  StyledButton,
  StyledFragment,
  StyledLi,
  StyledReactIconNext,
  StyledReactIconPrevious,
  StyledReactIconSkipPrevious,
  StyledReactIconTrackNext,
  StyledUl,
} from "./PadinathionStyled";

const Pagination = ({
  pageNumber,
  cardsPerPage,
  totalCards,
  onClick,
  handleNextPageButton,
  handlePreviousPageButton,
  handleLastPageButton,
  handleFirstPageButton,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  const lastPage = Math.ceil(totalCards / cardsPerPage);
  console.log(pageNumbers);

  return (
    <StyledFragment>
      <StyledButton
        onClick={() => handleFirstPageButton()}
        
      >
        <StyledReactIconSkipPrevious disabled={pageNumber === 1} size={"1.5em"} />
      </StyledButton>
      <StyledButton
        onClick={() => handlePreviousPageButton()}
        
      >
        <StyledReactIconPrevious disabled={pageNumber === 1} size={"1.5em"} />
      </StyledButton>
      <StyledUl>
        {pageNumbers.map((page) => (
          <StyledLi
            key={page}
            onClick={() => onClick(page)}
            active={pageNumber === page}
          >
            {page}
          </StyledLi>
        ))}
        <StyledButton
          onClick={() => handleNextPageButton()}
         
        >
          <StyledReactIconNext  disabled={pageNumber === lastPage} size={"1.5em"} />
        </StyledButton>
        <StyledButton
          onClick={() => handleLastPageButton()}
         
        >
          <StyledReactIconTrackNext  disabled={pageNumber === lastPage} size={"1.5em"} />
        </StyledButton>
      </StyledUl>
    </StyledFragment>
  );
};

export default Pagination;
