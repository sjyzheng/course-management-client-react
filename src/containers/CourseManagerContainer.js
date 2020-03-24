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
        order: 'aToZ'
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
        courseService.deleteCourse(courseToDelete.id)
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
            dateCreated: this.date.getMonth()+1 + '/' + this.date.getDate() + '/' + this.date.getFullYear(),
            dateModified : this.date.getMonth()+1 + '/' + this.date.getDate() + '/' + this.date.getFullYear()
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
                    crs.editing = course.id === crs.id;
                    return crs
                })
            })
        )
    }

    updateCourse = (course) => {
        this.date = new Date();
        course.dateModified =  this.date.getMonth()+1 + '/' + this.date.getDate() + '/' + this.date.getFullYear();
        courseService.updateCourse(course.id, course)
            .then(() => {
                courseService.findAllCourses()
                    .then(courses => {
                            this.setState({
                                courses: courses
                            })
                    })
            })
    }

    sortCourses = () => {
        this.setState(prev => {
            let sortedCourses = [...prev.courses];
            if (this.state.order === 'aToZ') {
                sortedCourses.sort((a,b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
                    else return -1;
                })
                return {
                    courses: sortedCourses,
                    order: 'zToA'
                }
            }
            else {
                sortedCourses.sort((a,b) => {
                    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                    else return -1;
                })
                return {
                    courses: sortedCourses,
                    order: 'aToZ'
                }
            }
        })
    };


    render() {
        return (
            <div className="container-fluid p-0">
                <Router>
                    <Route exact={true} path="/">
                        <Redirect to="/courseList/table"/>
                    </Route>

                    <Route path="/courseList/table" render={(props) =>
                        <div>
                            <CourseHeadingComponent
                                updateFormState = {this.updateFormState}
                                newCourseTitle = {this.state.newCourseTitle}
                                addCourse = {this.addCourse}/>
                            <CourseTableComponent
                                {...props}
                                order = {this.state.order}
                                deleteCourse={this.deleteCourse}
                                editCourse={this.editCourse}
                                updateCourse={this.updateCourse}
                                sortCourses={this.sortCourses}
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
                                order = {this.state.order}
                                deleteCourse={this.deleteCourse}
                                editCourse={this.editCourse}
                                updateCourse={this.updateCourse}
                                sortCourses={this.sortCourses}
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
