import { useNavigate } from "react-router-dom";
import AuthorizationForm from "../components/AuthorizationForm/AuthorizationForm";
import Modal from "../components/Modal/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { isModalOpen } from "../redux/Auth/authSelectors";
import { setModalOpen } from "../redux/Auth/authReducer";

function Authorization() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalOpen = useSelector(isModalOpen);

  const closeModal = () => {
    dispatch(setModalOpen(false));
    navigate("/");
  };
  return (
    <>
      <AuthorizationForm />
      {modalOpen && (
        <Modal
          title="Вітаємо!"
          text="Авторизація успішна"
          onCloseModal={closeModal}
        />
      )}
    </>
  );
}

export default Authorization;
