import React from 'react';
import axios from 'axios';

class EmployeePanel extends React.Component{
    constructor(props){
        super(props);
        this.dataSource = this.props.dataSource+"employees";
        this.state = {employees:[]};
        }

        componentDidMount(){
            axios.get(this.dataSource).then((res)=>{
                this.setState({employees:res.data})
            }).catch((err)=>{
                console.log("cannot get employee data");
            })
        }

        render(){
            return(
                <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                  <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                      <tbody>
                        
                        {this.state.employees.map((employee,index)=>{
                            return(
                                <tr>
                                    <td>{employee.FirstName} {employee.LastName}</td>
                                    <td>{employee.Position.PositionName}</td>
                                </tr>
                            )
                        })}
                      </tbody>
                    </table>
                  </div>
                  <a href="/employees" className="btn btn-primary form-control">View All Employee Data</a>
                
                </div>
              </div>
            );
        }


}

export default EmployeePanel;