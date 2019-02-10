import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchResultRow.scss";

class SearchResultRow extends PureComponent {
  render() {
    return (
      <div className="component-search-result-row">
        <span className="from">{this.props.from}</span>
        <span className="to">{this.props.to}</span>
        <span className="price">{this.props.price}</span>
      </div>
    );
  }
}
SearchResultRow.propTypes = {
  id: PropTypes.number,
  from: PropTypes.string,
  to: PropTypes.string,
  price: PropTypes.string  
};
export default SearchResultRow;
