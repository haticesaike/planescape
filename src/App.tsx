import React, {useState} from "react";
import "./App.css";
import FlightDetails from "./components/flightDetails/FlightDetails";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
    const [flights, setFlights] = useState(null);
    const [buttonType, setButtonType] = useState<"roundTrip" | "oneWay">("roundTrip");

    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>

            <div className="container">
                <div className="flight-details">
                    <FlightDetails flights={flights} setFlights={setFlights} buttonType={buttonType}
                                   setButtonType={setButtonType}/>
                </div>
                <div className="sidebar"><Sidebar/></div>
            </div>
            <div className='mobile'>
                Please use desktop for best experience..
            </div>
        </div>
    );
}

export default App;
