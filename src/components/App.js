import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import AddQuote from "./AddQuote";
import ExtractQuote from "./ExtractQuote";
import base from '../base';

class App extends React.Component {
  state = {
    quotes: {}, 
    team: ["Abi", "Andy", "Brian", "Colin", "Dan", "Ginevra", "Freddie", "Hubert", "Jeremy", "Martin", "Reeya", "Robin", "Sanjay", "Stacey", "Tom", "Toni", "Yago", "Zoe"],
    formSuccess: false
  }

  static propTypes = {
    match: PropTypes.object
  }

  componentDidMount() {
    this.ref = base.syncState('quotes', {
      context: this,
      state: 'quotes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addQuote = quote => {
    const quotes = { ...this.state.quotes };
    quotes[`quote${Date.now()}`] = quote;
    this.setState({ quotes, formSuccess: true });

    setTimeout(function () {
      this.setState({ formSuccess: false })
    }.bind(this), 1750);
  };

  render() {    
    return (
      <div className="quotie">
        <Header />
        <AddQuote addQuote={this.addQuote} team={this.state.team} formSuccess={this.state.formSuccess} />
        <ExtractQuote quotes={this.state.quotes} />
      </div>
    )
  }
}

export default App;