import { Pagination } from "@mui/material";
import { useMediaRules } from "../../hooks/useMediaRules";
import { useEffect } from "react";
import { currentPage } from "../../redux/Product/productSelectors";
import { currentPage as currentCatalogPage } from "../../redux/Catalog/catalogSelectors";
import { setPage } from "../../redux/Product/productReducer";
import { setPage as setCatalogPage } from "../../redux/Catalog/catalogReducer.js";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Paginator = ({ pageQty, array }) => {
  const { isMobile, isTablet, isDesktop } = useMediaRules();
  const pageNumber = useSelector(currentPage);
  const pageCatalogNumber = useSelector(currentCatalogPage);
  const dispatch = useDispatch();
  const location = useLocation();

  const handlePageChange = (_, number) => {
    if (number > pageQty || (number === pageNumber && pageQty === 1)) {
      if (location.pathname === "/") {
        dispatch(setPage(1));
      } else {
        dispatch(setCatalogPage(1));
      }
    } else {
      if (location.pathname === "/") {
        dispatch(setPage(number));
      } else {
        dispatch(setCatalogPage(number));
      }
    }
  };

  useEffect(() => {
    if (pageNumber > 1 && array.length === 0) {
      if (location.pathname === "/") {
        dispatch(setPage(1));
      } else {
        dispatch(setCatalogPage(1));
      }
    }
  }, [pageNumber, array.length]);

  return (
    <>
      <Pagination
        count={pageQty}
        page={location.pathname === '/' ? pageNumber : pageCatalogNumber}
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
