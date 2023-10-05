import styles from "./social.module.scss"

import {
  FiGithub,
  FiInstagram,
  FiPhoneCall,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    { name: "Github", 
      icon: <FiGithub />, 
      link: "https://github.com/nK1T/" 
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/ankit-giri-694937235/"
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/yepitsankit",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/vil_en15",
    },
    {
      name: "Mobile",
      icon: <FiPhoneCall />,
      link:"tel:+91-93542-15853",
    },
  ];
  return (
    <motion.div
      className={styles.socialicons}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className={styles.socialiconslist}>
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className={styles.socialiconslistitem}>
            <a
              href={link}
              className={styles.socialiconslistitemlink}
              target="_blank" rel="noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
