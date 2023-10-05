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
            Hello! My name is Ankit, and I recently completed my Bachelor of Technology (B.Tech) degree in Computer Science and Engineering (CSE) from IIMT College of Engineering. Now, I am eager to apply my skills and learn from experienced professionals.
          </p>
          <p className={styles.aboutgridinfotext}>
          Fast-forward to today, I am passionate about entering the field of web development, where I aspire to specialize in designing and developing high-quality solutions. My goal is to contribute to projects that not only meet but exceed the expectations of clients, providing them with delightful digital experiences.
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
            <li className={styles.aboutgridinfolistitem}>CSS</li>
            <li className={styles.aboutgridinfolistitem}>SASS/SCSS</li>
            <li className={styles.aboutgridinfolistitem}>MongoDB</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
