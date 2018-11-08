import React, { Component } from 'react';
import MainContainer from './MainContainer.js'
import axios from 'axios';

class Teams extends Component{
    constructor(props){
        super(props);
        this.dataSource = this.props.dataSource+"teams";
        this.state={teams:[]}
    }
    componentDidMount(){
        axios.get(this.dataSource).then((res)=>{
            this.setState({teams: res.data});
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
                        <td>Name</td>
                        <td>Projects</td>
                        <td>Employees</td>
                    <   td>Team Lead</td>
                    </tr>
                    {this.state.teams.map((team,index)=>{
                        return(
                            <tr>
                                <td>{team.TeamName}</td>
                                <td>
                                {team.Projects.map((project,index)=>{
                                    return(<li key={index}>{project.ProjectName}</li>)})}
                                </td>
                                <td>{team.Employees.length}</td>
                                <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                                
                            </tr>
                        )
                    })}
                  </tbody>
                </table>
            </MainContainer>
        )
    }
}

export default Teams;