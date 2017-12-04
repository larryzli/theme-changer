// import React, { Component } from "react";

// export default class EditToggle extends Component {
//   render() {
//     return (
//       <select
//         className="dropDownContainer ml0"
//         onChange={e => this.props.update(e.target.value)}
//       >
//         <option value="true"> Allow Edit </option>
//         <option value="false"> Disable Edit </option>
//       </select>
//     );
//   }
// }

import React from "react";

const EditToggle = ({ update }) => (
  <select
    className="dropDownContainer ml0"
    onChange={e => update(e.target.value)}
  >
    <option value="true"> Allow Edit </option>
    <option value="false"> Disable Edit </option>
  </select>
);

export default EditToggle;
