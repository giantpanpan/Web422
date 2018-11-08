import React, { Component } from 'react';
import MainContainer from './MainContainer.js'
import ProjectsPanel from './ProjectsPanel.js'
import EmployeesPanel from './EmployeesPanel.js'
import TeamsPanel from './TeamsPanel'

class OverView extends Component{
    render(){
        return(
            <MainContainer sidebar={this.props.title}>
            <h1 className="page-header">{this.props.title}</h1>
            <div className="row">
            <div className="col-md-4">
            <ProjectsPanel title="Projects" dataSource={this.props.dataSource}/>
            </div>
            <div className="col-md-4">
            <TeamsPanel title="Teams" dataSource={this.props.dataSource}/>
            </div>
            <div className="col-md-4">
            <EmployeesPanel title="Employees" dataSource={this.props.dataSource}/>
            </div>
            </div>
            </MainContainer>
        )
    }
}

export default OverView;