import React, { Component } from 'react';
import MainContainer from './MainContainer.js'
import axios from 'axios';
import moment from 'moment';

class Employees extends Component{
    constructor(props){
        super(props);
        this.dataSource = this.props.dataSource+"employees";
        this.state={employees:[]}
    }
    componentDidMount(){
        axios.get(this.dataSource).then((res)=>{
            this.setState({employees: res.data});
        }).catch((err)=>{
            console.log("cannot get data");
        })
    }
    render(){
        return(
            <MainContainer sidebar={this.props.title}>
            <h1 className="page-header">{this.props.title}</h1>
            <table className="table table-striped table-bordered">
                  <tbody>
                    <tr>
                        <td>Name & Position</td>
                        <td>Address</td>
                        <td>Phone Number</td>
                        <td>Hire Date</td>
                        <td>Salary Bonus</td>
                    </tr>
                    {this.state.employees.map((employee,index)=>{
                        return(
                            <tr>
                                <td>{employee.FirstName} {employee.LastName} - {employee.Position.PositionName}</td>
                                <td>{employee.AddressStreet} {employee.AddressState} {employee.AddressCity} {employee.AddressZip}</td>
                                <td>{employee.PhoneNum} ext {employee.Extension}</td>
                                <td>{moment(employee.HireDate).format('LL')}</td>
                                <td>$ {employee.SalaryBonus}</td>
                            </tr>
                        )
                    })}
                  </tbody>
                </table>
            </MainContainer>
        )
    }
}

export default Employees;