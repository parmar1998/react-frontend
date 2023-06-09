import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class createEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        // these properties are used to store the input from user
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    //here event was deprecated so we're using an arrow function to define the handleChange method,
    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    changeEmailIdNameHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }
    saveEmployee = (e) => {
        e.preventDefault();
        let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
        console.log('employee => '+JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res=>{
            this.props.history.push('/employees');
        });
    }
    cancel(){
        this.props.history.push('/employees')
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        {/* As soon as we enter the field ,even handler will take care of taking input inside it */}
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="First Name" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        {/* As soon as we enter the field ,even handler will take care of taking input inside it */}
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name="Last Name" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        {/* As soon as we enter the field ,even handler will take care of taking input inside it */}
                                        <label>EmailId: </label>
                                        <input placeholder="Email Id" name="Email Id" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailIdNameHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default createEmployeeComponent;