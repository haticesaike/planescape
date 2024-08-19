import styles from "./FlightList.module.css";
import NoFlightsSelected from "../noFlightsSelected/noFlightsSelected.tsx";
import {TbPlaneDeparture} from "react-icons/tb";
import {TbPlaneArrival} from "react-icons/tb";
import {IoIosAirplane} from "react-icons/io";


export default function FlightList({flights, buttonType}) {

    function formatTime(dateString: string): string {
        const date = new Date(dateString);

        const options: Intl.DateTimeFormatOptions = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };

        return date.toLocaleTimeString('en-US', options);
    }

    function calculateFlightDuration(boardingTime: string, landingTime: string): string {
        const boardingDate = new Date(boardingTime);
        const landingDate = new Date(landingTime);

        const durationInMilliseconds = landingDate.getTime() - boardingDate.getTime();

        const hours = Math.floor(durationInMilliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((durationInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));

        return `${hours}h ${minutes}m`;
    }

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
                    console.log('sad', flight),
                        <div key={flight.id} className={styles.flightItem}>
                            <div
                                className={styles.destination}>{flight.route.destinations}-{flight.route.destinations}</div>

                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                {/*LEFT*/}
                                <div>
                                    <div className={styles.departure}>
                                        <TbPlaneDeparture style={{fontSize: "1rem"}}/>
                                        <p>Departure</p>
                                    </div>

                                    <div style={{fontWeight: "700", color: "#2c2a2a"}}>
                                        <p>{formatTime(flight.checkinAllocations.checkinAllocations[0].startTime)}</p>

                                    </div>
                                    <div className={styles.AirportInfo}>Airport:{flight.flightName}</div>
                                </div>

                                {/*DIVIDER*/}
                                <div className={styles.divider}></div>

                                {/*MID*/}
                                <div className={styles.mid}>
                                    <div>{flight.airline}</div>
                                    <IoIosAirplane className={styles.icon}/>
                                    {calculateFlightDuration(flight.checkinAllocations.checkinAllocations[0].startTime, flight.checkinAllocations.checkinAllocations[0].endTime)}
                                </div>

                                {/*DIVIDER*/}
                                <div className={styles.divider}></div>

                                {/*RIGHT*/}
                                <div>
                                    <div className={styles.arrival}>
                                        <TbPlaneArrival style={{fontSize: "1rem"}}/>
                                        <p>Arrival</p>
                                    </div>

                                    <div style={{fontWeight: "700", color: "#2c2a2a"}}>
                                        <p>{formatTime(flight.checkinAllocations.checkinAllocations[0].endTime)}</p>

                                    </div>
                                    <div className={styles.AirportInfo}>Airport:{flight.flightName}</div>

                                </div>
                            </div>
                            <div className={styles.bookFlight}>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <p style={{fontWeight: "700", color: "#400cac"}}>Price: 230$</p>
                                    <div>{buttonType === "roundTrip" ? "Round trip" : "One way"}</div>
                                </div>
                                <div className={styles.bookNow}> Book Flight</div>
                            </div>
                            <div>

                            </div>

                        </div>
                ))
            )}
        </div>
    );
}
