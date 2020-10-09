import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      display: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      display: this.state.userInput,
      userInput: "",
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
        </form>
        <h1>{this.state.display}</h1>
      </>
    );
  }
}

export default Form;
