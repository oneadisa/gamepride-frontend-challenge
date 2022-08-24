import Link from "next/link";
import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNairaSign } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    return (
      <div className={styles.container}>
        <Link className={styles.icon} href="/">
          <FontAwesomeIcon icon={faNairaSign} />
        </Link>
        <Link className={styles.icon} href="/about">
          <FontAwesomeIcon icon={faNairaSign} />
        </Link>
        <Link className={styles.icon} href="/ninjas/">
          <FontAwesomeIcon icon={faNairaSign} />
        </Link>
        <Link className={styles.icon} href="/ninjas/">
          <FontAwesomeIcon icon={faNairaSign} />
        </Link>
      </div>
    );

}

export default Navbar;

