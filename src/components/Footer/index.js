import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.scss";
import { iconProps } from "utils";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconProps} />
        <FaTwitter {...iconProps} />
        <FaInstagram {...iconProps} />
      </div>
      <span>Desenvolvido por Alura</span>
    </footer>
  );
}
