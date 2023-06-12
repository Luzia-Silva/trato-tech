import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import classNames from "classnames";
import { RiShoppingCartFill, RiShoppingCart2Line } from "react-icons/ri";
import Busca from "components/Busca";
import { iconProps } from "utils";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <div>
          <a
            href="/"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === "/",
            })}>
            Página Inicial
          </a>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca/>
      </div>
      <div className={styles.icones}>
        {window.location.pathname === "/carinho" ? (
          <RiShoppingCartFill {...iconProps}/>
        ) : (
          <RiShoppingCart2Line {...iconProps} />
        )}
      </div>
    </nav>
  );
}
