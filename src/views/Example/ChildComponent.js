import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  onClickShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.onClickShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div>
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.onClickShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   let { name, age, arrJobs } = props;
//   return (
//     <>
//       <div>
//         Helllooo {name} - {age}
//       </div>
//       <div>
//         {arrJobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
export default ChildComponent;
