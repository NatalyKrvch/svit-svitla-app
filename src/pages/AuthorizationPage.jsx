import AuthorizationForm from "../components/AuthorizationForm/AuthorizationForm";
import Modal from "../components/Modal/Modal/Modal";
function Authorization() {
  return (
    <>
      <AuthorizationForm />
      {/* <Modal
        color="red"
        numberOfButtons={1}
        title="Вітаємо!"
        empTitle="Каталог 2011-2012"
        text="Авторизація успішна"
        // confirmationFn="()=>{}"
        onCloseModal={closeModal}
      /> */}
    </>
  );
}

export default Authorization;
