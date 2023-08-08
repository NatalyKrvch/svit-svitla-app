import CatalogCard from "../CatalogCard/CatalogCard";
import { StyledUl } from "./CatalogsListStyled";

const CatalogsList = ({ catalogsList, onOpenModal }) => {
  return (
    <StyledUl>
      {catalogsList.map((catalog) => (
        <li key={catalog._id}>
          <CatalogCard
            catalog={catalog}
            onOpenModal={onOpenModal}
          />
        </li>
      ))}
    </StyledUl>
  );
};

export default CatalogsList;
