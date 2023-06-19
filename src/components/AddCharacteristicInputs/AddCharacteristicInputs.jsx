import { useState } from "react";
import {
  StyledButton,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
} from "./AddCharacteristicInputsStyled";
import { BiMinusCircle } from "react-icons/bi";

const AddCharacteristicInputs = ({ onDelete , setCharacteristicArray }) => {
  const [characteristicNames, setCharacteristicName] = useState([]);
  const [characteristicValues, setCharacteristicValue] = useState([]);

  // setCharacteristicArray((prev)=>[...prev, {characteristicNames, characteristicValues}])

  const handleCharacteristicNameBlur = (event) => {
    setCharacteristicName((prevState) => [...prevState, event.target.value]);
  };

  const handleCharacteristicValueBlur = (event) => {
    setCharacteristicValue((prevState) => [...prevState, event.target.value]);
  };
  const handleCharacteristicNameChange = (evt) => {
    setCharacteristicName(evt.target.value);
  };

  const handleCharacteristicValueChange = (evt) => {
    setCharacteristicValue(evt.target.value);
  };

  return (
    <>
      <StyledInputWrapper>
        <StyledLabel htmlFor="price">Назва характеристики</StyledLabel>
        <StyledInput
          id="price"
          type="text"
          value={characteristicNames}
          onChange={handleCharacteristicNameChange}
          onBlur={handleCharacteristicNameBlur}
        />
        <StyledButton type="button " onClick={onDelete}>
          <BiMinusCircle size={"1.8em"} />
        </StyledButton>
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="price">Характеристика</StyledLabel>
        <StyledInput
          id="price"
          type="text"
          value={characteristicValues}
          onChange={handleCharacteristicValueChange}
          onBlur={handleCharacteristicValueBlur}
        />
        <StyledButton type="button " onClick={onDelete}>
          <BiMinusCircle size={"1.8em"} />
        </StyledButton>
      </StyledInputWrapper>
    </>
  );
};

export default AddCharacteristicInputs;
