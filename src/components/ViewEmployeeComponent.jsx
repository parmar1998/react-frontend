import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)
            this.state={
id:this.props.match.params.id,
employee:{} 
            }
        
    }
    componentDidMount(){
       EmployeeService.getEmployeeById(this.state.id).then(res=>{
        this.setState({employee:res.data});
           }) 
    }
    render() {
        return (
            <div>
                <div className="card d-flex justify-content-center align-items-center col-md-4"></div>
                <h3 className="text-centre">View Employee Details</h3>
                <div className="card-body">
                    <div  >
                    <label >Employee First Name: </label>
                    <div>{this.state.employee.firstName}</div>
                    </div>
                    <div >
                    <label >Employee Last Name: </label>
                    <div>{this.state.employee.lastName}</div>
                    </div>
                    <div>
                    <label >Employee Email: </label>
                    <div>{this.state.employee.emailId}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;