import { useState } from "react";
import {
  StyledButton,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
} from "./AddCharacteristicInputsStyled";
import { BiMinusCircle } from "react-icons/bi";

const AddCharacteristicInputs = ({
  id,
  onDelete,
  setCharacteristicArray,
  characteristicArray,
}) => {
  const [characteristicNamesInput, setCharacteristicNameInput] = useState("");
  const [characteristicValuesInput, setCharacteristicValueInput] = useState("");
  // const currentObj = characteristicArray.find(
  //   (obj) => obj.characteristicId === id
  // );

  const handleCharacteristicNameChange = (evt) => {
    setCharacteristicNameInput(evt.target.value);
    setCharacteristicArray((prev) =>
      prev.map((obj) =>
        obj.characteristicId === id
          ? { ...obj, characteristicName: evt.target.value }
          : obj
      )
    );
  };

  const handleCharacteristicValueChange = (evt) => {
    setCharacteristicValueInput(evt.target.value);
    setCharacteristicArray((prev) =>
      prev.map((obj) =>
        obj.characteristicId === id
          ? { ...obj, characteristicValue: evt.target.value }
          : obj
      )
    );
  };
  console.log(characteristicArray);
  return (
    <>
      <StyledInputWrapper>
        <StyledLabel htmlFor={id + "priceName"}>
          Назва характеристики
        </StyledLabel>
        <StyledInput
          id={id + "priceName"}
          type="text"
          value={characteristicNamesInput}
          onChange={handleCharacteristicNameChange}
          // onBlur={handleCharacteristicNameBlur}
        />
        <StyledButton
          type="button "
          onClick={() => {
            onDelete(id);
          }}
        >
          <BiMinusCircle size={"1.8em"} />
        </StyledButton>
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor={id + "price"}>Характеристика</StyledLabel>
        <StyledInput
          id={id + "price"}
          type="text"
          value={characteristicValuesInput}
          onChange={handleCharacteristicValueChange}
          // onBlur={handleCharacteristicValueBlur}
        />
        <StyledButton
          type="button "
          onClick={() => {
            onDelete(id);
          }}
        >
          <BiMinusCircle size={"1.8em"} />
        </StyledButton>
      </StyledInputWrapper>
    </>
  );
};

export default AddCharacteristicInputs;
