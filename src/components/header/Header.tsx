import styles from "./Header.module.css";
import { IoIosAirplane } from "react-icons/io";
import { FaTag } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";





function Header() {
  return <div className={styles.cover}>
    <div className={styles.left}>
      <div className={styles.logo}><IoIosAirplane   className={styles.iconLogo} />
      </div>
      <div className={styles.search}>PLANE SCAPE</div>
    </div>
    <div className={styles.right}>
      <div className={styles.item}>
        <FaTag className={styles.icon}/>
        Deals
      </div>
      <div className={styles.item}>
        <IoEarth className={styles.icon}/>
        Discover
      </div>
      <div className={styles.item}>
        <CgProfile className={styles.icon}/>
        Joane Smith
      </div>
    </div>
  </div>;
}

export default Header;
