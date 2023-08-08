import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";
import {
  CardWrp,
  ImgWrp,
  StyledBtn,
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
  const productPriceThousandsSeparates = productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

  return (
    <CardWrp>
      <ImgWrp onClick={() => navigate(`/productcard/${_id}`)}>
        <StyledImg src={productCoverURL} alt="Picture" />
      </ImgWrp>

      <StyledTextWrapper>
        <StyledProductName>{productName}</StyledProductName>
        <StyledP>{`Артикул: ${productCode}`}</StyledP>
        <StyledP>{`Ціна: ${productPriceThousandsSeparates} грн`}</StyledP>
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
            <StyledBtn onClick={() => navigate(`/editproductcard/${_id}`)}>
              <RiPencilLine size={"1.5em"} />
            </StyledBtn>
            <StyledBtn onClick={() => onOpen(productCode, _id)}>
              <RiDeleteBin6Line size={"1.5em"} />
            </StyledBtn>
          </StyledBtnWrp>
        )}
      </StyledTextWrapper>
    </CardWrp>
  );
};

export default ProductCard;
