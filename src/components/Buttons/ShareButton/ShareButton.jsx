import { ShareIcon, ButtonStyled } from "./ShareButtonStyled";
import PropTypes from "prop-types";

const ShareButton = ({ title, text, url }) => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
        console.log("Успішно надіслано");
      } else {
        console.log("Web Share API не підтримується в цьому браузері");
      }
    } catch (error) {
      console.error("Помилка при спробі поділитися:", error);
    }
  };

  return (
    <>
      <ButtonStyled
        type="button"
        onClick={() => {
          handleShare();
        }}
      >
        <ShareIcon size={"1.5em"} />
      </ButtonStyled>
    </>
  );
};

ShareButton.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
};

export default ShareButton;
