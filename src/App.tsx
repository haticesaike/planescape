import React, {useState} from "react";
import "./App.css";
import FlightDetails from "./components/flightDetails/FlightDetails";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
    const [flights, setFlights] = useState(null);
    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>

            <div className="container">
                <div className="flight-details">
                    <FlightDetails flights={flights} setFlights={setFlights}/>
                </div>
                <div className="sidebar"><Sidebar/></div>
            </div>
        </div>
    );
}

export default App;
