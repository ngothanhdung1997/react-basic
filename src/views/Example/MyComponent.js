import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "job1", title: "Dev", salary: "500" },
      { id: "job2", title: "FE", salary: "400" },
      { id: "job3", title: "BE", salary: "300" },
    ],
  };
  addNewJobs = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJobs={this.addNewJobs} />
        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}
export default MyComponent;
