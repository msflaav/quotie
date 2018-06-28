import React from "react";
import { CSVLink } from 'react-csv';

class ExtractQuote extends React.Component {
  render() {
    const data = [];

    Object.keys(this.props.quotes).map(key =>
      data.push(this.props.quotes[key])
    )
    
    return (
      <div className="btn-save">
        <CSVLink data={data} filename={"mit-quotes.csv"}>Download all quotes</CSVLink>
      </div>
    )
  }
}

export default ExtractQuote;