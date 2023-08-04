import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CardWrp,
  ImgWrp,
  StyledBtn,
  StyledBtnDelete,
  StyledBtnEdit,
  StyledBtnWrp,
  ButtonWrapper,
  StyledImg,
  StyledP,
  StyledProductName,
  StyledTextWrapper,
} from "./ProductCardStyled";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import MainButton from "../Buttons/MainButton/MainButton";

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
          <ButtonWrapper>
            <MainButton
              type="button"
              onClick={() => navigate(`/productcard/${_id}`)}
            >
              Деталі
            </MainButton>
          </ButtonWrapper>
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
