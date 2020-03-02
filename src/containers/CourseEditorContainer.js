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
import CourseService from "../services/CourseService";
import CourseEditorNavBarComponent from "../components/courseEditor/CourseEditorNavBarComponent";

const rootReducer = combineReducers({
    moduleReducer,
    lessonReducer,
    topicReducer,
    widgetReducer,
})

const store = createStore(rootReducer);

class CourseEditorContainer extends React.Component {

    state = {
        courseTitle: ""
    };

    componentDidMount() {
        new CourseService().findCourseById(this.props.match.params.courseId)
            .then((course)=>{
                this.setState({courseTitle: course.title})
            });
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <div className="container-fluid p-0">
                        <CourseEditorNavBarComponent
                            courseTitle = {this.state.courseTitle}
                        />
                    </div>

                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-3">
                                <ModuleListContainer
                                    courseId = {this.props.match.params.courseId}
                                    params = {this.props.match.params}
                                />
                            </div>
                            <div className="col-9">
                                <div className="my-2">
                                    <LessonTabsContainer
                                        courseId = {this.props.match.params.courseId}
                                        moduleId = {this.props.match.params.moduleId}
                                        params = {this.props.match.params}
                                        history = {this.props.history}/>

                                </div>

                                <div>
                                    <TopicPillsContainer
                                        courseId = {this.props.match.params.courseId}
                                        moduleId = {this.props.match.params.moduleId}
                                        lessonId = {this.props.match.params.lessonId}
                                        params = {this.props.match.params}
                                        history = {this.props.history}/>
                                </div>
                                <div>
                                    {this.props.match.params.topicId !== undefined &&
                                    <WidgetListContainer
                                        courseId = {this.props.match.params.courseId}
                                        moduleId = {this.props.match.params.moduleId}
                                        lessonId = {this.props.match.params.lessonId}
                                        topicId = {this.props.match.params.topicId}
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