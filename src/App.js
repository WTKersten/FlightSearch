import React, { Component } from 'react';

import Header from './app/components/header/Header';
import SearchInput from './app/components/searchinput/SearchInput';
import SearchResultList from './app/components/SearchResultList/SearchResultList';
import filterFlights from './filterFlights';

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
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange}/>
        <SearchResultList flights={this.state.filteredFlights}/>
      </div>
    );
  }
}

export default App;