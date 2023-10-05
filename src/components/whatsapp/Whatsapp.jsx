import styles from "./whatsapp.module.scss";
import { BsWhatsapp } from "react-icons/bs";

const Whatsapp = () => {
  const handleClickToChat = () => {
    const whatsappLink = "https://wa.me/9354215853";
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className={styles.circle}>
      <span onClick={handleClickToChat} className={styles.arrowup}>
        <BsWhatsapp />
      </span>
    </div>
  );
};

export default Whatsapp;
