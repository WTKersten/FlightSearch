import filterFlights from '../filterFlights';
import flightData from '../flightData.json';

describe('filterFlights', () => {
  
  it('returns all flights on no input', () => {
    expect(filterFlights('')).toEqual(expect.arrayContaining(flightData));
  });

  it('returns one on one matching input', () => {
    const expectedResult = [{
      "id": 2,
      "from": "Amsterdam (AMS)",
      "to": "Berlin (TXL)",
      "price": "€ 24,00"
    }];

    expect(filterFlights('TXL')).toEqual(expect.arrayContaining(expectedResult));
  });

  it('returns no results on no matching input', () => {
    expect(filterFlights('test')).toEqual(expect.arrayContaining([]));
  });

});