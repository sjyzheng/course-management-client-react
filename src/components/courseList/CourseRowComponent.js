import React from "react";
import {Link} from "react-router-dom";

class CourseRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            course: this.props.course,
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
        if (this.state.courseName === '') {
            alert('Please Enter a Valid Course Title!');
        } else {
            this.setState(prevState => ({
                editing: !prevState.editing
            }));
            course.title=this.state.courseName;
            this.props.updateCourse(course)
        }
    }

    updateForm = (e) => {
        this.setState({
            courseName: e.target.value
        })
    }

    render() {
        return (
            <div>
                <li className={`list-group-item ${this.state.active?'active':''}`}
                    onClick={this.highlightCourse}>
                    {!this.state.active &&
                        <div className="row list-group-itm">
                            <div className="col-8 col-md-6 col-lg-6">
                                <Link to={{
                                    pathname: `/courses/${this.state.course.id}`,
                                    state: {courseTitle: this.state.courseName,
                                            layout: "table"}}}
                                      className="wbdv-course-title"
                                      onClick={event => event.stopPropagation()}>
                                    {this.props.course.title}
                                </Link>
                            </div>
                            <div className="col-md-4 col-lg-2 text-center d-none d-md-block wbdv-row wbdv-owner">me</div>
                            <div className="col-lg-2 text-center d-none d-lg-block wbdv-row wbdv-modified-date">{this.props.course.dateModified}</div>
                            <div className="col-4 col-md-2">
                            </div>
                        </div>
                    }

                    {this.state.active && !this.state.editing &&
                        <div className="row list-group-itm">
                            <div className="col-8 col-md-6 col-lg-6">{this.props.course.title}</div>
                            <div className="col-md-4 col-lg-2 text-center d-none d-md-block wbdv-row wbdv-owner">me</div>
                            <div className="col-lg-2 text-center d-none d-lg-block wbdv-row wbdv-modified-date">{this.props.course.dateModified}</div>
                            <div className="col-4 col-md-2">
                                <i className="far fa-trash-alt fa-lg float-right mt-2 ml-2"
                                   onClick={() => this.props.deleteCourse(this.props.course)}>
                                </i>
                                <i className="fas fa-pencil-alt fa-lg float-right mt-2 mr-2"
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       this.editCourse();
                                   }}>
                                </i>
                            </div>
                        </div>
                    }

                    {this.state.active && this.state.editing &&
                        <div className="form-row">
                            <input className="wbdv-course-editFld form-control col-8"
                                   type="search"
                                   value={this.state.courseName}
                                   placeholder="Enter a New Title"
                                   onClick={(e) => {
                                       e.stopPropagation()}}
                                   onChange={this.updateForm}/>
                            <div className="col text-right">
                                <i className="fas fa-check fa-lg mt-2 mx-3"
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       this.saveCourse(this.props.course)}}>
                                </i>
                            </div>
                        </div>
                    }
                </li>
            </div>
        )
    }
}

export default CourseRowComponent
