import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FormBody, Btns } from "./OrderingFormStyled";
import MaskedInput from 'react-text-mask'

const PHONE_MASK =['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/] 

const OrderingForm = ({ product, onChange, onConfirm, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value)
  }
  
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value)
  }

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    onConfirm();
  }

  useEffect(() => {
    const orderingData = {
      name,
      phoneNumber
    }
    
    onChange(orderingData);
  }, [phoneNumber, name])

  return (
    <Form onSubmit={handleOrderSubmit}>
      <FormBody>
        <h1>Замовити позицію "{(product.productName)}"</h1>
        <p>Для замовлення залиште, будь ласка, нам свій номер телефону</p>
        <Form.Control
          className="mb-2"
          placeholder="Вашe ім'я"
          onChange={handleNameChange}
          required
        />
        <MaskedInput
          mask={PHONE_MASK}
          className="form-control mb-2"
          placeholder="Ваш номер телефону"
          guide={true}
          onChange={handlePhoneChange}
          required
        />
        <p>Менеджер зв'яжеться з вами для оформлення вашого замовлення</p>
        <p>Також ви можете подзвонити або написати нам самостійно у месенджер (Viber, Telegram) за номером <b>+38 063 477 98 88</b></p>
      </FormBody>
      <Btns>
        <Button
          type="button"
          variant="secondary" 
          onClick={onClose}
          >
          Закрити
        </Button>
        <Button
          type="submit"
          variant="success"
          >
          Підтвердити
        </Button>
      </Btns>
    </Form>
  )
}

export default OrderingForm;