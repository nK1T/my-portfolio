import { motion } from "framer-motion";
import styles from "./email.module.scss"
function Email() {
  return (
    <motion.div
      className={styles.email}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <a href="mailto:ankit.giri.15042002@gmail.com" target="_blank" className={styles.emaillink} rel="noreferrer">
        ankit.giri.15042002@gmail.com
      </a>
    </motion.div>
  );
}

export default Email;
