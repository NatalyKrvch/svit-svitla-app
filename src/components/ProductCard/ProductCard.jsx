import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CardWrp,
  ImgWrp,
  StyledBtn,
  StyledBtnDelete,
  StyledBtnEdit,
  StyledBtnWrp,
  StyledButton,
  StyledImg,
  StyledP,
  StyledProductName,
  StyledTextWrapper,
} from "./ProductCardStyled";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";


const ProductCard = ({
  product: { productCoverURL, productName, productCode, productPrice, _id },
  onOpen,
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  return (
    <CardWrp>
      <ImgWrp onClick={() => navigate(`/productcard/${_id}`)}>
        <StyledImg src={productCoverURL} alt="Picture" />
      </ImgWrp>

      <StyledTextWrapper>
        <StyledProductName>{productName}</StyledProductName>
        <StyledP>{`Артикул: ${productCode}`}</StyledP>
        <StyledP>{`Ціна: ${productPrice} грн`}</StyledP>
        {!isLoggedIn ? (
          <StyledButton
            type="button"
            onClick={() => navigate(`/productcard/${_id}`)}
          >
            Деталі
          </StyledButton>
        ) : (
          <StyledBtnWrp>
            <StyledBtnEdit
              onClick={() => navigate(`/editproductcard/${_id}`)}
            />

            <StyledBtnDelete onClick={() => onOpen(productCode, _id)} />
          </StyledBtnWrp>
        )}
      </StyledTextWrapper>
    </CardWrp>
  );
};

export default ProductCard;
