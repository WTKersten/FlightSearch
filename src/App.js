import React, { Component } from 'react';

import Header from './components/header/Header';
import SearchInput from './components/searchinput/SearchInput';
import SearchResultList from './components/SearchResultList/SearchResultList';
import filterFlights from './data/filterFlights';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredFlights: filterFlights(''),
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredFlights: filterFlights(event.target.value)
    });
  }
  
  render() {
    return (
      <div className="container-flight-search">
        <Header />
        <SearchInput textChange={this.handleSearchChange}/>
        <SearchResultList flights={this.state.filteredFlights}/>
      </div>
    );
  }
}

export default App;