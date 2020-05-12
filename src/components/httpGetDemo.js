import React, { Component } from "react";
import axios from "axios";

class HTTPGetDemo extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      errorMsg: ''
    };
  }

  componentDidMount() {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        console.log(response);
        this.setState({
          employees: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
            errorMsg : 'Error from Server'
        })
      });
  }

  render() {
    return (
      <div>
        <h2>List of employees from API</h2>
        {this.state.employees.length
          ? this.state.employees.map((employee) => (
              <li key={employee.id}>{employee.employee_name}</li>
            ))
          : null}
          {
              this.state.errorMsg ? this.state.errorMsg : null
          }
      </div>
    );
  }
}

export default HTTPGetDemo;
