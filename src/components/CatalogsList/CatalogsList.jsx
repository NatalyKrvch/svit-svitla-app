import CatalogCard from "../CatalogCard/CatalogCard";

const CatalogsList = ({ catalogsList, onDelete }) => {
  return (
    <ul>
      {catalogsList.map((catalog, index) => {
        <li key={index}>
          <CatalogCard catalog={catalog} onDelete={onDelete} />
        </li>;
      })}
    </ul>
  );
};

export default CatalogsList;
