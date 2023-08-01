import { Pagination } from "@mui/material";
import { useMediaRules } from "../../hooks/useMediaRules";


const Paginator = ({pageQty, pageNumber, setPageNumber}) => {
    const { isMobile, isTablet, isDesktop} = useMediaRules();

    const handlePageChange = (_, number) => {
      if (number > pageQty) {
        setPageNumber(pageNumber - 1);
      } else {
        setPageNumber(number);
      }
    };
  
    
 return (
    <>
        <Pagination
    count={pageQty}
    page={pageNumber}
    showFirstButton
    showLastButton
    onClick={() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }}
    onChange={handlePageChange}
    sx={{
      marginTop: isMobile? "16px" : isTablet? "32px" : "64px",
      maxWidth: isMobile ? "328px" : isTablet ? "512px" : "568px",
      marginLeft: "auto",
      "& .MuiPagination-ul": {
        justifyContent: "center",
      "& .MuiPaginationItem-root": {
        fontSize: isDesktop? "20px" : "14px",
      }
      }
    }}
  />
    </>
 )

}

export default Paginator;