import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import SearchResultRow from "./SearchResultRow/SearchResultRow";
import "./SearchResultList.scss";

class SearchResultList extends PureComponent {
  render() {
    return (
      <div className="component-search-result-list">
        {this.props.flights.map(flight => (
          <SearchResultRow
            key={flight.id}
            from={flight.from}
            to={flight.to}
            price={flight.price}
          />
        ))}
      </div>
    );
  }
}

SearchResultList.propTypes = {
  flights: PropTypes.array
};

export default SearchResultList;
