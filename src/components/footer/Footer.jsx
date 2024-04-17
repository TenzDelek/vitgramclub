import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>VITgram</div>
      <div className={styles.text}>
       Tenzin Delek and Kshitij Tripathi © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
