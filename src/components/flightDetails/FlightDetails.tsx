import styles from "./FlightDetails.module.css";
import BookFlight from "../bookFlight/BookFlight.tsx";
import FlightList from "../flightList/FlightList.tsx";
import Filters from "../filters/Filters.tsx";

export default function FlightDetails() {
  return <div className={styles.flightDetails}>

   <div className={styles.bookFlight}>
     <BookFlight />
   </div>
    <div className={styles.flightResult}>
     <div className={styles.flightList}>
         <FlightList />
     </div>
      <div className={styles.filters}>
          <Filters />
      </div>
    </div>
  </div>;
}
