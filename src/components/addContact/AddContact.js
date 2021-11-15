import React from "react";
import "./addContact.css";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    console.log(this.state);
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.add}>
          <input
            name="name"
            type="text"
            className="feedback-input"
            placeholder="Name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            name="email"
            type="text"
            className="feedback-input"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

export default AddContact;
