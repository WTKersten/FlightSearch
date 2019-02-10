export default function filterFlights(searchText) {
  const flightData = [
    {
      id: 1,
      from: 'Amsterdam (AMS)',
      to: 'London (STD)',
      price: '€ 30,00'
    },
    {
      id: 2,
      from: 'Amsterdam (AMS)',
      to: 'Berlin (TXL)',
      price: '€ 24,00'
    },
  ];
  const cleanedSearchText = searchText.toLowerCase().trim();

  const flightDataFilter = flight => {
    return flight.from.toLowerCase().includes(cleanedSearchText) || 
      flight.to.toLowerCase().includes(cleanedSearchText);
  }

  return flightData.filter(flightDataFilter);
}