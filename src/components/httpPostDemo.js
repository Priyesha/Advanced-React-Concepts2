import React, { Component } from 'react';
import axios from 'axios';

export class HTTPPostDemo extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             salary: '',
             age: '',
             sucessMsg: ''
        }
    }
    
    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://dummy.restapiexample.com/api/v1/create')
          .then(response => {
              console.log(response);
              this.setState({
                  sucessMsg: 'Employee added successfully'
              })
          })
          .catch(error => {
              console.log(error);
          })
    }

    render() {
        const {name, salary, age} = this.state;
        return (
            <div>
                <form onSubmit={this.submit}>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" value={name} onChange={this.valueChange}/>
                  <br></br>
                  <label htmlFor="salary">Salary</label>
                  <input type="text" name="salary" value={salary} onChange={this.valueChange}/>
                  <br></br>
                  <label htmlFor="age">Age</label>
                  <input type="text" name="age" value={age} onChange={this.valueChange}/>
                  <button type="submit">Submit</button>
                </form>
                {
                    this.state.sucessMsg ? this.state.sucessMsg : null
                }
            </div>
        )
    }
}

export default HTTPPostDemo
