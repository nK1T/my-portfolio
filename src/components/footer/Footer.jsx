import styles from "./footer.module.scss"
function Footer() {
  return (
    <footer>
      <a className={styles.footerlink}>
        <span className={styles.footerinfo}>Crafted with flair by Ankit Giri.</span>
      </a>
    </footer>
  );
}

export default Footer;
