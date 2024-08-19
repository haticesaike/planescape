import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.schiphol.nl',
    headers: {
        'Accept': 'application/json',
        'App_id': '5a97ecad',
        'App_key': '378056ba377bbf19f4b5003b12cbb8e5',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'ResourceVersion': 'v4',
    },
});

export const getFlights = async (airport, date, flightType) => {
    try {
        const response = await axiosClient.get('/public-flights/flights', {
            params: {
                'flightDirection': flightType, // 'D' or 'A'
                'scheduleDate': date ? date : undefined,
            }
        });

        const flights = response.data.flights;

        const filteredFlights = airport ? flights.filter(flight =>
            flight.route.destinations.includes(airport)
        ) : flights;
        console.log('filteredFlights', filteredFlights);
        return filteredFlights;
    } catch (error) {
        console.error('Uçuş verileri alınırken bir hata oluştu:', error);
        throw error;
    }
};