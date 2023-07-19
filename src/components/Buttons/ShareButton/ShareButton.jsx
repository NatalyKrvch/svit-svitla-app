import { ShareIcon } from "./ShareButtonStyled";

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
      <ShareIcon
        onClick={() => {
          handleShare;
        }}
      />
    </>
  );
};

export default ShareButton;
