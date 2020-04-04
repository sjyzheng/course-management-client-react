import React from "react";

import {Provider} from "react-redux";
import moduleReducer from "../reducers/moduleReducer";
import lessonReducer from "../reducers/lessonReducer";
import topicReducer from "../reducers/topicReducer";
import widgetReducer from "../reducers/widgetReducer";
import ModuleListContainer from "./ModuleListContainer";
import {combineReducers, createStore} from "redux";
import LessonTabsContainer from "./LessonTabsContainer";
import TopicPillsContainer from "./TopicPillsContainer";
import WidgetListContainer from "./WidgetListContainer";
import CourseEditorNavBarComponent from "../components/courseEditor/CourseEditorNavBarComponent";
import CourseService from "../services/CourseService";

const rootReducer = combineReducers({
    moduleReducer,
    lessonReducer,
    topicReducer,
    widgetReducer,
})

const store = createStore(rootReducer);

const courseService = new CourseService();

class CourseEditorContainer extends React.Component {
    state = {
        courseTitle: this.props.location.state.courseTitle,
        layout: this.props.location.state.layout,
        course: { dateModified: "" }
    };

    componentDidMount() {
        courseService.findCourseById(this.props.match.params.courseId).then(course=>this.setState({course: course}))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.course.dateModified !== this.state.course.dateModified) {
            courseService.updateCourse(this.props.match.params.courseId, this.state.course);
        }
    }

    updateCourse = () => {
        let date = new Date();
        this.setState( prev => ({
            course: { ...prev.course,
                    dateModified: date.getMonth()+1 + '/' + date.getDate() + '/' + date.getFullYear()
            }
        }));
        console.log(this.state.course)
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <div className="container-fluid p-0">
                        <CourseEditorNavBarComponent
                            courseTitle = {this.state.courseTitle}
                            layout = {this.state.layout}
                        />
                    </div>

                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-3">
                                <ModuleListContainer
                                    courseId = {this.props.match.params.courseId}
                                    courseTitle = {this.state.courseTitle}
                                    layout = {this.state.layout}
                                    updateCourse = {this.updateCourse}
                                    params = {this.props.match.params}
                                    history = {this.props.history}/>

                            </div>
                            <div className="col-9">
                                <div className="my-2">
                                    <LessonTabsContainer
                                        courseId = {this.props.match.params.courseId}
                                        moduleId = {this.props.match.params.moduleId}
                                        courseTitle = {this.state.courseTitle}
                                        layout = {this.state.layout}
                                        updateCourse = {this.updateCourse}
                                        params = {this.props.match.params}
                                        history = {this.props.history}/>

                                </div>
                                <div>
                                    <TopicPillsContainer
                                        courseId = {this.props.match.params.courseId}
                                        moduleId = {this.props.match.params.moduleId}
                                        lessonId = {this.props.match.params.lessonId}
                                        courseTitle = {this.state.courseTitle}
                                        layout = {this.state.layout}
                                        updateCourse = {this.updateCourse}
                                        params = {this.props.match.params}
                                        history = {this.props.history}/>
                                </div>
                                <div>
                                    {this.props.match.params.topicId &&
                                    <WidgetListContainer
                                        courseId = {this.props.match.params.courseId}
                                        moduleId = {this.props.match.params.moduleId}
                                        lessonId = {this.props.match.params.lessonId}
                                        topicId = {this.props.match.params.topicId}
                                        courseTitle = {this.state.courseTitle}
                                        layout = {this.state.layout}
                                        updateCourse = {this.updateCourse}
                                        params = {this.props.match.params}
                                        history = {this.props.history}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}
export default CourseEditorContainer
