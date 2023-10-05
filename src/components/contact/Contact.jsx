import { motion } from "framer-motion";
import styles from './contact.module.scss'
function Contact() {
  return (
    <motion.div
      className={styles.contact}
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      {/* <h2 className="contact-title">What&apos;s Next?</h2> */}
      <h2 className={styles.contactsubtitle}>Reach out to me!</h2>
      <p className={styles.contacttext}>
      I’m actively exploring new opportunities, and my inbox is your open door. Whether you have a question or simply want to drop a friendly ’hello’ rest assured that I’ll do my utmost to respond promptly!
      </p>
      <a href="mailto:ankit.giri.15042002@gmail.com" target="_blank" className={styles.contactcta} rel="noreferrer">
        <button>Say Hello</button>
      </a>
    </motion.div>
  );
}

export default Contact;
