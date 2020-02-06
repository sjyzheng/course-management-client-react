import React from "react";
import CoursePage from "../images/CoursePage.png"

class CourseGridCardComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            courseName: this.props.course.title,
            editing: false
        }
    }

    highlightCourse = () => {
        this.setState(prevState => ({
            active: !prevState.active,
            editing: false,
            courseName: this.props.course.title
        }))
    }

    editCourse = () => {
        this.setState(prevState => ({
            editing: !prevState.editing
        }))
    }

    saveCourse = (course) =>{
        this.state.courseName === ''? alert('Please Enter a Valid Course Title!'):
            this.setState(prevState => ({
            editing: !prevState.editing
        }));
        course.title=this.state.courseName;
        this.props.updateCourse(course)
    }

    updateForm = (e) => {
        this.setState({
            courseName: e.target.value
        });
    }

    render() {
        return (
            <div className= "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2 " onClick={this.highlightCourse}>
                {console.log(this.state.active)}
                {!this.state.active &&
                    <div className="card">
                        <img src={CoursePage} className="card-img-top border" alt="..."/>
                        <div className="card-body border">
                            <a href="/course" onClick={event => event.stopPropagation()}>
                                <h6 className="wbdv-course-title card-title text-truncate">
                                    {this.props.course.title}
                                </h6>
                            </a>
                            <div className="card-text wbdv-grid-date">Last Modified {this.props.course.dateModified}</div>
                        </div>
                    </div>
                }

                {this.state.active && !this.state.editing &&
                    <div className="card">
                        <img src={CoursePage} className="card-img-top border" alt="..."/>
                        <div className="card-body fixed border">
                            <h6 className="card-title text-truncate">{this.props.course.title}</h6>
                            <i className="fas fa-pencil-alt float-left fa-lg my-1 wbdv-grid-edit-course"
                               onClick={(e) => {
                                   e.stopPropagation();
                                   this.editCourse();
                               }}>
                            </i>
                            <i className="far fa-trash-alt float-right fa-lg my-1 wbdv-grid-delete" onClick={() => this.props.deleteCourse(this.props.course)}> </i>
                        </div>
                    </div>
                }

                {this.state.active && this.state.editing &&
                    <div className="card">
                        <img src={CoursePage} className="card-img-top border" alt="..."/>
                        <div className="card-body input-group border">
                            <input type="search"
                                   className="form-control"
                                   value={this.state.courseName}
                                   placeholder="Enter a New Title"
                                   onClick={(e) => {
                                       e.stopPropagation()}}
                                   onChange={this.updateForm}/>
                            <div className="input-group-append">
                                <i className="fas fa-check fa-lg float-right mt-2 ml-2 pt-1 wbdv-grid-save-name"
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       this.saveCourse(this.props.course)}}>
                                </i>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }


}

export default CourseGridCardComponent
