import React from 'react';
import axios from 'axios';
import moment from 'moment';

class ProjectPanel extends React.Component{
    constructor(props){
        super(props);
        this.dataSource = this.props.dataSource+"projects"
        this.state ={projects:[]}
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
            <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.title}</h3>
            </div>
            <div className="panel-body">
              <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                  <tbody>
                    {this.state.projects.map((project,index)=>{
                        var activateDate = moment().diff(moment(project.ProjectStartDate),'days');
                        return(
                            <tr>
                                <td>{project.ProjectName}</td>
                                <td>Active {activateDate} Days</td>
                            </tr>
                        )
                    })}
                  </tbody>
                </table>
              </div>
              <a href="/projects" className="btn btn-primary form-control">View All Project Data</a>
            </div>
          </div>
        );
    }
}

export default ProjectPanel;