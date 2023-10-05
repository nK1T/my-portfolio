import { useEffect, useState } from "react";
import Logo from "../logo/logo";
import styles from "./navbar.module.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false);
    });
  }, []);

  return (
    <motion.div
    className={`${styles.container} ${navbarVisible ? styles["blurnav"] : ""}`}
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: .8,
      ease: "easeInOut",
      delay: 0.6,
    }}
    >
      <div className={styles.logo}>
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className={styles.links}>
        <motion.a
          whileHover={{ scale: 1.2,transition: { duration:.3 }}}
          whileTap={{ scale: 0.8 }}
        //   onHoverStart={(e) => {}}
        //   onHoverEnd={(e) => {}}
          href="/#"
        >
          Home
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2,transition: { duration:.3 }}}
          whileTap={{ scale: 0.8 }}
          href="/#about"
        >
          About
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2,transition: { duration:.3 }}}
          whileTap={{ scale: 0.8 }}
          href="/#work"
        >
          Work
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2,transition: { duration:.3 }}}
          whileTap={{ scale: 0.8 }}
          href="/#contact"
        >
          Contact
        </motion.a>
      </div>
      <a href="/Ankitgiri_resume.pdf" target="_blank" className={styles.button}>
  <button>Resume</button>
</a>

    </motion.div>
  );
};

export default Navbar;
