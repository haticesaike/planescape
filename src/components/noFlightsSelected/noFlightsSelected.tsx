import styles from "./NoFlightsSelected.module.css";
import noFlightSelected from "../../assets/images/noFlightSelected.jpg";

export default function NoFlightsSelected() {
    return <div className={styles.noFlightSelected}>
        <img className={styles.noFlightSelectedImage} src={noFlightSelected} alt="noFlightSelected"/>

    </div>;
}
