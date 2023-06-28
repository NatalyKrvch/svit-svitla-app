import { useLayoutEffect, useState } from "react";
import {
  StyledButton,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledUlCharacteristics,
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

  console.log(characteristicArray);

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
  // console.log(characteristicArray);
  return (
    <>
      {characteristicArray.length !== 0 && (
        <StyledUlCharacteristics>
          {characteristicArray.map(item => (
            <li key={item._id}>
              <StyledInputWrapper>
                <StyledLabel htmlFor={id + "priceName"}>
                  Назва характеристики
                </StyledLabel>
                <StyledInput
                  id={id + "priceName"}
                  type="text"
                  pattern="[A-Za-z]+"
                  title="Пожалуйста, введите только буквы"
                  value={item.name}
                  onChange={handleCharacteristicNameChange}
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
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Характеристика може включати тільки літери, апостроф, тире "
                  value={item.value}
                  onChange={handleCharacteristicValueChange}
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
            </li>
          ))}
        </StyledUlCharacteristics>
      )}
    </>
  );
};

export default AddCharacteristicInputs;

// <>
//   <StyledInputWrapper>
//     <StyledLabel htmlFor={id + "priceName"}>
//       Назва характеристики
//     </StyledLabel>
//     <StyledInput
//       id={id + "priceName"}
//       type="text"
//       pattern="[A-Za-z]+"
//       title="Пожалуйста, введите только буквы"
//       value={characteristicNamesInput}
//       onChange={handleCharacteristicNameChange}
//     />
//     <StyledButton
//       type="button "
//       onClick={() => {
//         onDelete(id);
//       }}
//     >
//       <BiMinusCircle size={"1.8em"} />
//     </StyledButton>
//   </StyledInputWrapper>
//   <StyledInputWrapper>
//     <StyledLabel htmlFor={id + "price"}>Характеристика</StyledLabel>
//     <StyledInput
//       id={id + "price"}
//       type="text"
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Характеристика може включати тільки літери, апостроф, тире "
//       value={characteristicValuesInput}
//       onChange={handleCharacteristicValueChange}
//     />
//     <StyledButton
//       type="button "
//       onClick={() => {
//         onDelete(id);
//       }}
//     >
//       <BiMinusCircle size={"1.8em"} />
//     </StyledButton>
//   </StyledInputWrapper>
// </>
