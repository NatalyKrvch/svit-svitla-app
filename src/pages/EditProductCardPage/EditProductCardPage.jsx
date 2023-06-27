import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/Product/productOperations";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPlusCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { getCurrentProduct } from "../../redux/Product/productSelectors";

const EditProductCard = () => {
  const currentProduct = useSelector(getCurrentProduct)
  // const [product, setProduct] = useState({...currentProduct})
  const dispatch = useDispatch();
  const {id} = useParams();
  console.log(id);
  
  console.log(currentProduct);
  
  useEffect(()=> {
    dispatch(getProductById(id));
  }, [id]);

  if(!currentProduct){
     return
  }
  const { productName, productCode, productPhotoURL, productCoverURL, productPrice, productCountry } = currentProduct;
  return (
    <>
      <h2>Редагувати картку товару</h2>
      <h3>{productName}</h3>
      <p>{`Артикул: ${productCode}`}</p>
      <div>
        <label htmlFor="">Назва обкладинки</label>
        <img src={productCoverURL} alt="photo" />
        <input type="text" />
        <button>
          <RiDeleteBin6Line size={"1.8em"} color="white" />
        </button>
      </div>
      {productPhotoURL.map((photo) => {
        <div>
          <label htmlFor="">Назва зображення</label>
          <img src={photo} alt="photo" />
          <input type="text" />
          <button>
            <RiDeleteBin6Line size={"1.8em"} color="white" />
          </button>
        </div>;
      })}
       <label>
          <input
            // type="file"
            // multiple
            // onChange={handleProductImagesChange}
            // accept=".jpg, .jpeg"
          />
          <div>
            <label>Додати зображення</label>
            <button>
              <BiPlusCircle size={"1.5em"} />
            </button>
          </div>
        </label>
        <h4>Характеристи товару</h4>
        <p>{`Ціна: ${productPrice} грн`}</p>
        <p>{`Країна походження: ${productCountry}`}</p>


    </>
  );
};

export default EditProductCard;
