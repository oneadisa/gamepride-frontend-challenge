import Link from "next/link";
import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNairaSign } from "@fortawesome/free-solid-svg-icons";
import {faFutbol} from "@fortawesome/free-solid-svg-icons";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    return (
      <div className={styles.bigContainer}>
        <div className={styles.container}>
          <div className={styles.icon}>
            <Link href="/livescore">
              <FontAwesomeIcon icon={faFireFlameCurved} size="2x" />
            </Link>
          </div>
          <div className={styles.icon}>
            <Link href="/leagues">
              <FontAwesomeIcon icon={faFutbol} size="2x" />
            </Link>
          </div>
          <div className={styles.icon}>
            <Link href="/">
              <FontAwesomeIcon icon={faBarsProgress} size='2x' />
            </Link>
          </div>
          <div className={styles.icon}>
            <Link href="/">
              <FontAwesomeIcon icon={faEllipsisVertical} size='2x' />
            </Link>
          </div>
        </div>
      </div>
    );

}

export default Navbar;

