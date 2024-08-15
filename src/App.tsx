import "./App.css";
import FlightDetails from "./components/flightDetails/FlightDetails";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  return (
    <div className="App">
      <div className="header">
          <Header/>
      </div>

      <div className="container">
       <div className="flight-details">
           <FlightDetails />
       </div >
        <div className="sidebar"><Sidebar /></div>
      </div>
    </div>
  );
}

export default App;
