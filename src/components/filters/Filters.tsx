import React, {useState} from 'react';
import styles from './Filters.module.css';

export default function Filters() {
    const [selectedArrivalTime, setSelectedArrivalTime] = useState(null);
    const [selectedStop, setSelectedStop] = useState(null);
    const [selectedAirline, setSelectedAirline] = useState(null);

    return (
        <div className={styles.filters}>
            {/* Sort By */}
            <div className={styles.filterSection}>
                <label className={styles.label}>Sort by:</label>
                <select className={styles.select}>
                    <option>Lowest Price</option>
                    <option>Highest Price</option>
                    <option>Shortest Duration</option>
                </select>
            </div>

            {/* Arrival Time */}
            <div className={styles.filterSection}>
                <label className={styles.label}>Arrival Time</label>
                <div>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="arrivalTime"
                            value="morning"
                            checked={selectedArrivalTime === 'morning'}
                            onChange={() => setSelectedArrivalTime('morning')}
                        />
                        5:00 AM - 11:59 AM
                    </label>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="arrivalTime"
                            value="afternoon"
                            checked={selectedArrivalTime === 'afternoon'}
                            onChange={() => setSelectedArrivalTime('afternoon')}
                        />
                        12:00 PM - 5:59 PM
                    </label>
                </div>
            </div>

            {/* Stops */}
            <div className={styles.filterSection}>
                <label className={styles.label}>Stops</label>
                <div>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="stops"
                            value="nonstop"
                            checked={selectedStop === 'nonstop'}
                            onChange={() => setSelectedStop('nonstop')}
                        />
                        Nonstop $230
                    </label>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="stops"
                            value="1stop"
                            checked={selectedStop === '1stop'}
                            onChange={() => setSelectedStop('1stop')}
                        />
                        1 Stop $230
                    </label>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="stops"
                            value="2plusstops"
                            checked={selectedStop === '2plusstops'}
                            onChange={() => setSelectedStop('2plusstops')}
                        />
                        2+ Stops $230
                    </label>
                </div>
            </div>

            {/* Airlines Included */}
            <div className={styles.filterSection}>
                <label className={styles.label}>Airlines Included</label>
                <div>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="airline"
                            value="alitalia"
                            checked={selectedAirline === 'alitalia'}
                            onChange={() => setSelectedAirline('alitalia')}
                        />
                        Alitalia $230
                    </label>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="airline"
                            value="lufthansa"
                            checked={selectedAirline === 'lufthansa'}
                            onChange={() => setSelectedAirline('lufthansa')}
                        />
                        Lufthansa $230
                    </label>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="airline"
                            value="airfrance"
                            checked={selectedAirline === 'airfrance'}
                            onChange={() => setSelectedAirline('airfrance')}
                        />
                        Air France $230
                    </label>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="airline"
                            value="brusselsairlines"
                            checked={selectedAirline === 'brusselsairlines'}
                            onChange={() => setSelectedAirline('brusselsairlines')}
                        />
                        Brussels Airlines $230
                    </label>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="airline"
                            value="airitaly"
                            checked={selectedAirline === 'airitaly'}
                            onChange={() => setSelectedAirline('airitaly')}
                        />
                        Air Italy $230
                    </label>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="airline"
                            value="siberia"
                            checked={selectedAirline === 'siberia'}
                            onChange={() => setSelectedAirline('siberia')}
                        />
                        Siberia $230
                    </label>
                </div>
            </div>
        </div>
    );
}
