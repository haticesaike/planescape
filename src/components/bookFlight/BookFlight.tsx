import styles from "./BookFlight.module.css";
import {IoIosAirplane} from "react-icons/io";
import {useState} from "react";
import {FaPlaneDeparture} from "react-icons/fa";
import {FaPlaneArrival} from "react-icons/fa";
import {ComboboxData, Select} from '@mantine/core';
import {DatePickerInput} from '@mantine/dates';
import {IoMdCalendar} from "react-icons/io";
import airports from '../../assets/data/airports.json';


export default function BookFlight({setFlights}) {
    const [activeButton, setActiveButton] = useState<"roundTrip" | "oneWay">("roundTrip");
    const [departureValue, setDepartureValue] = useState<Date | null>(null);
    const [arrivalValue, setArrivalValue] = useState<Date | null>(null);

    const handleButtonClick = (buttonType: "roundTrip" | "oneWay") => {
        setActiveButton(buttonType);
    }

    const handleSearchFlights = () => {
        const searchResults = [
            {
                id: 1,
                departure: "Milano",
                depAirport: "MXP",
                arrival: "Madrid",
                arrAirport: "MAD",
                expectedTimeBoarding: "2024-08-15T19:28:35.061Z",
                estimatedLandingTime: "2024-08-15T23:45:16.000+02:00",
                price: "$230",
                airline: "Alitalia",
            },
            {
                id: 1,
                departure: "Milano",
                depAirport: "MXP",
                arrival: "Madrid",
                arrAirport: "MAD",
                expectedTimeBoarding: "2024-08-15T19:28:35.061Z",
                estimatedLandingTime: "2024-08-15T23:45:16.000+02:00",
                price: "$230",
                airline: "Alitalia",
            },
            {
                id: 1,
                departure: "Milano",
                depAirport: "MXP",
                arrival: "Madrid",
                arrAirport: "MAD",
                expectedTimeBoarding: "2024-08-15T19:28:35.061Z",
                estimatedLandingTime: "2024-08-15T23:45:16.000+02:00",
                price: "$230",
                airline: "Alitalia",
            },
        ];
        setFlights(searchResults);
    };

    return <div className={styles.bookFlight}>
        <div className={styles.flight_booking_header}>

            {/*TITLE & LOGO*/}
            <div className={styles.flight_booking_title}>
                <IoIosAirplane className={styles.logo}/>
                <p>BOOK YOUR FLIGHT</p>
            </div>


            {/*TRIP TYPE*/}
            <div className={styles.flight_booking_trip_type}>
                <button
                    className={`${styles.button_one} ${activeButton === "roundTrip" ? styles.active : ""}`}
                    onClick={() => handleButtonClick("roundTrip")}
                >Round trip
                </button>
                <button
                    className={`${styles.button_two} ${activeButton === "oneWay" ? styles.active : ""}`}
                    onClick={() => handleButtonClick("oneWay")}
                >One way
                </button>
            </div>
        </div>


        <div className={styles.flight_booking_content}>
            <div className={styles.flight_booking_location}>

                {/*DEPARTURE LOCATION*/}
                <Select
                    radius={"20px 0 0 20px"}
                    leftSection={<FaPlaneDeparture className={styles.icon}/>}
                    rightSection={(<></>)}
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                    searchable
                />


                {/*ARRIVAL LOCATION*/}
                <Select
                    radius={"0 20px 20px 0"}
                    leftSection={<FaPlaneArrival className={styles.icon}/>}
                    rightSection={(<></>)}
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                    searchable
                />

            </div>
            <div className={styles.flight_date}>

                {/*DEPARTURE DATE*/}
                <DatePickerInput
                    className={styles.flight_booking_date}
                    leftSection={<IoMdCalendar className={styles.icon}/>}
                    radius={"20px 0 0 20px"}
                    value={departureValue}
                    onChange={setDepartureValue}
                />

                {/*ARRIVAL DATE*/}
                <DatePickerInput
                    className={styles.flight_booking_date}
                    leftSection={<IoMdCalendar className={styles.icon}/>}
                    radius={"0 20px 20px 0"}
                    value={arrivalValue}
                    onChange={setArrivalValue}
                    disabled={activeButton === "oneWay"}
                />
            </div>
        </div>

        {/*BOOK FLIGHT BUTTON*/}
        <button className={styles.flight_booking_button} onClick={handleSearchFlights}>Show Flights</button>
    </div>;
}
