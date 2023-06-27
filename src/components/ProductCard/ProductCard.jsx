import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  StyledBtn,
  StyledBtnWrp,
  StyledButton,
  StyledImg,
  StyledP,
  StyledProductName,
  StyledTextWrapper,
} from "./ProductCardStyled";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";

const ProductCard = ({
  product: { productCoverURL, productName, productCode, productPrice,  _id },
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

//   const handleEditButton = () => {
//     navigate(`/editproductcard/${_id}`)
//   };

  return (
    <div>
      <StyledImg src={productCoverURL} alt="Picture" />
      <StyledTextWrapper>
        <StyledProductName>{productName}</StyledProductName>
        <StyledP>{`Артикул: ${productCode}`}</StyledP>
        <StyledP>{`Ціна: ${productPrice} грн`}</StyledP>
        {!isLoggedIn ? (
          <StyledButton>Деталі</StyledButton>
        ) : (
          <StyledBtnWrp>
            <StyledBtn
              type="button"
              onClick={()=>  navigate(`/editproductcard/${_id}`)}
            >
              <RiPencilLine size={"1.5em"} />
            </StyledBtn>
            <StyledBtn type="button">
              <RiDeleteBin6Line size={"1.5em"} />
            </StyledBtn>
          </StyledBtnWrp>
        )}
      </StyledTextWrapper>
    </div>
  );
};

export default ProductCard;
