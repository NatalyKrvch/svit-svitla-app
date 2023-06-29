import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import CatalogsList from "../../components/CatalogsList/CatalogsList";
import {  useLayoutEffect, useState } from "react";
import { getCatalogs } from "../../redux/Catalog/catalogOperations";

const PreorderCataloguePage = () => {
  const [catalogsList, setCatalogsList] = useState([]);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const catalogs = dispatch(getCatalogs());
    console.log(catalogs);
    setCatalogsList(catalogs);
  }, [dispatch]);

  if (catalogsList.length === 0) {
    return;
  }


  const handleDeleteCatalog = (id) => {
    catalogsList.filter(catalog => catalog._id !== id )
  }



  return (
    <>
      {isLoggedIn && (
        <div>
          <input type="text" placeholder="Пошук" />
        </div>
      )}
      <h2>Каталоги для передзамовлення</h2>
      <CatalogsList 
      catalogsList={catalogsList}
      onDelete={handleDeleteCatalog} />
    </>
  );
};

export default PreorderCataloguePage;
