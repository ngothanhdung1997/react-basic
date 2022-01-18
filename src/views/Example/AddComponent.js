import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleOnchangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleOnchangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Chưa điền nội dung !!!");
      return;
    }
    this.props.addNewJobs({
      id: Math.floor(Math.random() * 11),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",clear
    });
  };
  render() {
    return (
      <>
        <div>
          <input
            value={this.state.title}
            type="text"
            onChange={(event) => this.handleOnchangeTitle(event)}
          />
        </div>
        <div>
          <input
            value={this.state.salary}
            type="text"
            onChange={(event) => this.handleOnchangeSalary(event)}
          />
        </div>
        <div>title {this.state.title}</div>
        <div>salary {this.state.salary}</div>
        <div>
          <button onClick={(event) => this.handleSubmit(event)}>click</button>
        </div>
      </>
    );
  }
}
export default AddComponent;
