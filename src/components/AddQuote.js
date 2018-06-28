import React from "react";
import PropTypes from "prop-types";
import TeamMember from './TeamMember';

class AddQuote extends React.Component {
  nameRef = React.createRef();
  quoteRef = React.createRef();
  dateRef = React.createRef();
  btnRef = React.createRef();

  static propTypes = {
    addQuote: PropTypes.func,
    team: PropTypes.array,
    formSuccess: PropTypes.bool
  }

  createQuote = (event) => {
    event.preventDefault();
    const quote = {
      nameRef: this.nameRef.value.value,
      quoteRef: this.quoteRef.value.value,
      dateRef: Date.now()
    }
    
    this.props.addQuote(quote);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.createQuote}>
        <label htmlFor="quote">Enter a quote</label>
        <textarea id="quote" cols="30" rows="10" ref={this.quoteRef} required></textarea>
        <label htmlFor="name">Who said it?</label>
        <select id="name" ref={this.nameRef} required>
          <option value="">Select a team member</option>
          {Object.keys(this.props.team).map(key =>
            <TeamMember key={key} name={this.props.team[key]} />
          )}
        </select>
        <button ref={this.btnRef} type="submit" className={this.props.formSuccess ? 'btn success' : 'btn'}>Submit</button>
      </form>
    )
  }
}

export default AddQuote;