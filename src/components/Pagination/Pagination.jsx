import { Pagination } from "@mui/material";
import { useMediaRules } from "../../hooks/useMediaRules";


const Paginator = ({pageQty, pageNumber, setPageNumber}) => {
    const { isMobile, isTablet, isDesktop} = useMediaRules();
    
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
    onChange={(_, number) => setPageNumber(number)}
    sx={{
      maxWidth: isMobile ? "328px" : isTablet ? "512px" : "568px",
      marginLeft: "auto",
      "& .MuiPagination-ul": {
        justifyContent: isMobile? "center" : "flex-end",
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