import React from "react";
import CourseHeadingComponent from "../components/courseList/CourseHeadingComponent";
import CourseTableComponent from "../components/courseList/CourseTableComponent";
import CourseGridComponent from "../components/courseList/CourseGridComponent";
import CourseService from "../services/CourseService";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import CourseEditorContainer from "./CourseEditorContainer";


const courseService = new CourseService();

class CourseManagerContainer extends React.Component {
    date;

    state = {
        newCourseTitle: '',
        courses: [],
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(() => {
                courseService.findAllCourses()
                    .then(courses => {
                        this.setState({
                            courses: courses
                        })
                    })
            })
    }

    addCourse = () => {
        this.date = new Date();
        this.state.newCourseTitle === ''? alert('Please Enter a Valid Course Title!'):
        courseService.createCourse({
            title: this.state.newCourseTitle,
            dateModified: this.date.getMonth()+1 + '/' + this.date.getDate() + '/' + this.date.getFullYear()
        }).then(() => {
            courseService.findAllCourses()
                .then(courses => {
                    this.setState({
                        courses: courses,
                        newCourseTitle: '',
                    })
                })
        })
    }

    updateFormState = (event) => {
        this.setState({
            newCourseTitle: event.target.value
        })
    }

    editCourse = (course) => {
        this.setState(prevState => ({
                courses: prevState.courses.map (crs => {
                    crs.editing = course._id === crs._id;
                    return crs
                })
            })
        )
    }

    updateCourse = (course) => {
        this.date = new Date();
        course.dateModified =  this.date.getMonth()+1 + '/' + this.date.getDate() + '/' + this.date.getFullYear();
        courseService.updateCourse(course._id, course)
            .then(() => {
                courseService.findAllCourses()
                    .then(courses => {
                            this.setState({
                                courses: courses
                            })
                    })
            })
    }


    render() {
        return (
            <div className="container-fluid p-0">
                <Router>
                    <Redirect from="/" to="/courseList/table"/>
                    <Route path="/courseList/table" render={(props) =>
                        <div>
                            <CourseHeadingComponent
                                updateFormState = {this.updateFormState}
                                newCourseTitle = {this.state.newCourseTitle}
                                addCourse = {this.addCourse}/>
                            <CourseTableComponent
                                {...props}
                                deleteCourse={this.deleteCourse}
                                editCourse={this.editCourse}
                                updateCourse={this.updateCourse}
                                courses={this.state.courses}/>
                        </div>
                    }/>

                    <Route path="/courseList/grid" render={(props) =>
                        <div>
                            <CourseHeadingComponent
                                updateFormState = {this.updateFormState}
                                newCourseTitle = {this.state.newCourseTitle}
                                addCourse = {this.addCourse}/>
                            <CourseGridComponent
                                {...props}
                                deleteCourse={this.deleteCourse}
                                editCourse={this.editCourse}
                                updateCourse={this.updateCourse}
                                toggle={this.toggle}
                                courses={this.state.courses}/>
                        </div>
                    }/>

                    <Route path="/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId" exact={true} component={CourseEditorContainer}/>
                    <Route path="/courses/:courseId/modules/:moduleId/lessons/:lessonId" exact={true} component={CourseEditorContainer}/>
                    <Route path="/courses/:courseId/modules/:moduleId" exact={true} component={CourseEditorContainer}/>
                    <Route path="/courses/:courseId" exact={true} component={CourseEditorContainer}/>
                </Router>
            </div>
        )
    }
}


export default CourseManagerContainer
