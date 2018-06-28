import React from "react";

class TeamMember extends React.Component {
  render() {
    return (
      <option value={this.props.name}>{this.props.name}</option>
    )
  }
}

export default TeamMember;