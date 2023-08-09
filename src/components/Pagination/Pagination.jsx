import { Pagination } from "@mui/material";
import { useMediaRules } from "../../hooks/useMediaRules";
import { useEffect } from "react";

const Paginator = ({ pageQty, pageNumber, setPageNumber, array }) => {
  const { isMobile, isTablet, isDesktop } = useMediaRules();

  const handlePageChange = (_, number) => {
    if (number > pageQty || (number === pageNumber && pageQty === 1)) {
      setPageNumber(1);
    } else {
      setPageNumber(number);
    }
  };

  useEffect(() => {
    if (pageNumber > 1 && array.length === 0) {
      setPageNumber(1);
    }
  }, [pageNumber, array.length]);


  return (
    <>
      <Pagination
        count={pageQty}
        page={pageNumber}
        showFirstButton
        showLastButton
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        onChange={handlePageChange}
        sx={{
          marginTop: isMobile ? "16px" : isTablet ? "32px" : "64px",
          maxWidth: isMobile ? "328px" : isTablet ? "512px" : "568px",
          marginX: "auto",
          "& .MuiPagination-ul": {
            justifyContent: "center",
            "& .MuiPaginationItem-root": {
              fontSize: isDesktop ? "20px" : "14px",
            },
          },
        }}
      />
    </>
  );
};

export default Paginator;
