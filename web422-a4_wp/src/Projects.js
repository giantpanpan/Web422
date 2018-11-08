import React, { Component } from 'react';
import MainContainer from './MainContainer.js'
import axios from 'axios';
import moment from 'moment';

class Projects extends Component{
    constructor(props){
        super(props);
        this.dataSource = this.props.dataSource+"projects";
        this.state={projects:[]}
    }
    componentDidMount(){
        axios.get(this.dataSource).then((res)=>{
            this.setState({projects: res.data});
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
                        <td>Description</td>
                        <td>Start Date</td>
                    <td>End Date</td>
                    </tr>
                    {this.state.projects.map((project,index)=>{
                        var endDate="";
                        if (project.ProjectEndDate==null){
                            endDate="n/a"
                        }
                        else{
                            endDate=moment(project.ProjectEndDate).format('LL');
                        }
                        return(
                            <tr>
                                <td>{project.ProjectName}</td>
                                <td>{project.ProjectDescription}</td>
                                <td>{moment(project.ProjectStartDate).format('LL')}</td>
                                <td>{endDate}</td>
                            </tr>
                        )
                    })}
                  </tbody>
                </table>
            </MainContainer>
        )
    }
}

export default Projects;