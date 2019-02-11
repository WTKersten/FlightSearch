import flightData from './flightData.json';

export default function filterFlights(searchText) {
  const cleanedSearchText = searchText.toLowerCase().trim();
  return flightData.filter(flight => {
    return flight.from.toLowerCase().includes(cleanedSearchText) || 
      flight.to.toLowerCase().includes(cleanedSearchText);
  });
}