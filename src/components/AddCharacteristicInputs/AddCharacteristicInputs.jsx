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
  name,
  value,
  characteristicArray,
  setCharacteristicArray,
  
}) => {


  const handleChange = (ev) => {
     const {name, value} = ev.target
     setCharacteristicArray(p => 
      p.map((el) => el._id !== id ? el : {...el, [name] : value}))
      localStorage.setItem("additionalCharacteristics", JSON.stringify(characteristicArray));
  };
 
  const handleDeleteCharacteristic = (id) => {
    const newArray = characteristicArray.filter(
      (item) => item._id !== id
    );
    setCharacteristicArray(newArray);
    localStorage.setItem("additionalCharacteristics", JSON.stringify(newArray) );
  };

  return (
    <>
        <StyledUlCharacteristics>
              <StyledInputWrapper>
                <StyledLabel htmlFor={id + "priceName"}>
                  Назва характеристики
                </StyledLabel>
                <StyledInput
                  id={id + "priceName"}
                  name="name"
                  type="text"
                  pattern="[a-zA-Zа-яА-ЯґҐєЄіІїЇёЁ\s\(\),]*"
                  title="Пожалуйста, введите только буквы"
                  value={name}
                  onChange={handleChange}
                  required
                />
                <StyledButton
                  onClick={() => {
                    handleDeleteCharacteristic(id);
                  }}
                >
                  <BiMinusCircle size={"1.5em"} />
                </StyledButton>
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledLabel htmlFor={id + "price"}>Характеристика</StyledLabel>
                <StyledInput
                  id={id + "price"}
                  name="value"
                  type="text"
                  pattern="[a-zA-Zа-яА-ЯґҐєЄіІїЇёЁ0-9-\s]*"
                  title="Характеристика може включати тільки літери українського чи англійського алфавіту, цифри та тире "
                  value={value}
                  onChange={handleChange}
                  required
                />
                <StyledButton
                  
                  onClick={() => {
                    handleDeleteCharacteristic(id);
                  }}
                >
                  <BiMinusCircle size={"1.5em"} />
                </StyledButton>
              </StyledInputWrapper>
        </StyledUlCharacteristics>
    </>
  );
};

export default AddCharacteristicInputs;

