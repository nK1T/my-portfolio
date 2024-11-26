// import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./about.module.scss"

function About() {
//   const ref = useRef(null);
//   const isInView = useInView(ref);
//   useEffect(() => {
//     console.log("Element is in view: ", isInView);
//   }, [isInView]);
  return (
    <motion.div
      className={styles.about}
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className={styles.title}>
        <h2>About Me</h2>
      </div>
      <div className={styles.aboutgrid}>
        <div className={styles.aboutgridphoto}>
          <div className={styles.overlay}></div>
          <div className={styles.overlayborder}></div>
          <div className={styles.aboutgridphotocontainer}>
            <img src="/ankit.jpg" alt="profile" width={400} height={400}/>
          </div>
        </div>
        <div className={styles.aboutgridinfo}>
          <p className={styles.aboutgridinfotext}>
          Hello, my name is Ankit, and I hold a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering from IIMT College of Engineering. With over a year of experience as a Full Stack Developer, I have honed my skills in designing, developing, and delivering high-quality web applications.
          </p>
          <p className={styles.aboutgridinfotext}>
          I am deeply passionate about web development and thrive on creating innovative, user-centric solutions that exceed client expectations. My objective is to contribute to impactful projects by leveraging my expertise to craft seamless and engaging digital experiences.
          </p>
          <p className={styles.aboutgridinfotext}>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className={styles.aboutgridinfolist}>
            <li className={styles.aboutgridinfolistitem}>React.js</li>
            <li className={styles.aboutgridinfolistitem}>Next.js</li>
            <li className={styles.aboutgridinfolistitem}>Node.js</li>
            <li className={styles.aboutgridinfolistitem}>Express.js</li>
            <li className={styles.aboutgridinfolistitem}>JavaScript</li>
            <li className={styles.aboutgridinfolistitem}>TypeScript</li>
            <li className={styles.aboutgridinfolistitem}>Pyhton</li>
            <li className={styles.aboutgridinfolistitem}>PHP</li>
            <li className={styles.aboutgridinfolistitem}>CSS</li>
            <li className={styles.aboutgridinfolistitem}>SASS/SCSS</li>
            <li className={styles.aboutgridinfolistitem}>MongoDB</li>
            <li className={styles.aboutgridinfolistitem}>MySQL</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
