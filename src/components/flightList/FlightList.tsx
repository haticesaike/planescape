import styles from "./FlightList.module.css";
import NoFlightsSelected from "../noFlightsSelected/noFlightsSelected.tsx";

export default function FlightList({flights}) {
    return (
        <div className={styles.flightList}>
            {flights === null ? (
                <NoFlightsSelected/>
            ) : flights.length === 0 ? (
                <div className={styles.noFlightsFound}>
                    <p>No flights found for your search criteria.</p>
                </div>
            ) : (
                flights.map((flight) => (
                    <div key={flight.id} className={styles.flightItem}>
                        <p>Departure: {flight.departure} at {flight.departureTime}</p>
                        <p>Arrival: {flight.arrival} at {flight.arrivalTime}</p>
                        <p>Price: {flight.price}</p>
                        <p>Airline: {flight.airline}</p>
                    </div>
                ))
            )}
        </div>
    );
}
