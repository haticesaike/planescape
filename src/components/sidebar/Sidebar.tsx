import styles from "./Sidebar.module.css";
import { FaCar } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";




export default function Sidebar() {
  return <div className={styles.sidebar}>
    <div className={styles.container} style={{backgroundImage: "url('/src/assets/images/car.jpg')"}}>
      <FaCar className={styles.icon}/>
        <h3>CAR RENTALS</h3>

    </div>
    <div className={styles.container} style={{backgroundImage: "url('/src/assets/images/hotel.jpg')"}}>
      <FaHotel className={styles.icon}/>
      <h3>HOTELS</h3>


    </div>
    <div className={styles.container} style={{backgroundImage: "url('/src/assets/images/travel.jpg')"}}>
      <FaUmbrellaBeach className={styles.icon}/>
      <h3>TRAVEL PACKAGES</h3>


    </div>

  </div>;
}
