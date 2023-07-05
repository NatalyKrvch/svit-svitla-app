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

  const visiblePages = pageNumbers.slice(
    Math.max(0, pageNumber - 3),
    Math.min(pageNumber + 2, lastPage)
  );

  const showEllipsis = pageNumber > 4 && pageNumber < lastPage - 2;

  console.log(visiblePages);
  console.log(showEllipsis);

  return (
    <StyledFragment>
      <StyledButton onClick={() => handleFirstPageButton()}>
        <StyledReactIconSkipPrevious
          disabled={pageNumber === 1}
          size={"1.5em"}
        />
      </StyledButton>
      <StyledButton onClick={() => handlePreviousPageButton()}>
        <StyledReactIconPrevious disabled={pageNumber === 1} size={"1.5em"} />
      </StyledButton>
      <StyledUl>
      {visiblePages[0] > 1 && (
        <StyledLi onClick={() => onClick(1)}>1</StyledLi>
      )}
      {visiblePages[0] > 2 && <StyledLi disabled>...</StyledLi>}
      {visiblePages.map((page) => (
        <StyledLi
          key={page}
          onClick={() => onClick(page)}
          active={pageNumber === page}
        >
          {page}
        </StyledLi>
      ))}
      {visiblePages[visiblePages.length - 1] < lastPage - 1 && (
        <StyledLi disabled>...</StyledLi>
      )}
      {visiblePages[visiblePages.length - 1] < lastPage && (
        <StyledLi onClick={() => onClick(lastPage)}>{lastPage}</StyledLi>
      )}
      </StyledUl>
      <StyledButton onClick={() => handleNextPageButton()}>
        <StyledReactIconNext
          disabled={pageNumber === lastPage}
          size={"1.5em"}
        />
      </StyledButton>
      <StyledButton onClick={() => handleLastPageButton()}>
        <StyledReactIconTrackNext
          disabled={pageNumber === lastPage}
          size={"2em"}
        />
      </StyledButton>
    </StyledFragment>
  );
};

export default Pagination;
