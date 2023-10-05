import styles from "./hero.module.scss";

import { motion } from "framer-motion";
function Hero() {
  return (
      <div id="hero" className={styles.hero}>
        <motion.h1
          className={styles.herotitle}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          Hi my name is
        </motion.h1>
        <motion.h2
          className={styles.herotitlelarge}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.75,
          }}
        >
          Ankit Giri.
        </motion.h2>
        <motion.h3
          className={`${styles.herotitlelarge} ${styles.herotitlesub}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.05,
          }}
        >
          Web Wizard Crafting Magic.
        </motion.h3>
        <motion.p
          className={styles.herotext}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.35,
          }}
        >
          I&apos;m a Passionate Full-Stack Developer | Crafting Immersive User Experiences with React, Next.js, Express, Node.js, MongoDB, and Cutting-Edge Web Technologies 🚀✨&nbsp;
          {/* <a href="https://rapidops.com" className={styles.link}>
            Rapidops.
          </a> */}
        </motion.p>
        <motion.div
          className={styles.herobutton}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.65,
          }}
        ><a href="/#work">
          <button>Click here for more</button>
        </a>
        </motion.div>
      </div>
  );
}

export default Hero;
