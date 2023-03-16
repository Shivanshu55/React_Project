import React from "react";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    }
  }

  render() {
    return (
      <div id="filters">
        <input type={"text"} placeholder={"Search"} onChange={(e) => {
          this.setState({search:e.target.value})
        }} />
        <button onClick={() => {
          this.props.handleSearch(this.state.search)}}>Apply</button>
      </div>
    );
  }
}

export default Filter;
