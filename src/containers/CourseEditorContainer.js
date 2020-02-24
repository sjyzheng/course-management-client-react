import React from "react";

import WidgetListComponent from "../components/courseEditor/WidgeListComponent";
import {Provider} from "react-redux";
import moduleReducer from "../reducers/moduleReducer";
import lessonReducer from "../reducers/lessonReducer";
import topicReducer from "../reducers/topicReducer";
import widgetReducer from "../reducers/widgetReducer";
import ModuleListContainer from "./ModuleListContainer";
import {combineReducers, createStore} from "redux";
import LessonTabsContainer from "./LessonTabsContainer";
import CourseEditorNavBarComponent from "../components/courseEditor/CourseEditorNavBarComponent";
import TopicPillsContainer from "./TopicPillsContainer";
import WidgetListContainer from "./WidgetListContainer";
// import CourseEditorDropdownsContainer from "../../containers/CourseEditorDropdownsContainer";
// import CourseEditorDropdownsComponent from "./CourseEditorDropdownsComponent";

const rootReducer = combineReducers({
    moduleReducer,
    lessonReducer,
    topicReducer,
    widgetReducer
})

const store = createStore(rootReducer);

const CourseEditorContainer = ({match, history}) =>
    <Provider store={store}>
        <div>
            <div className="container-fluid p-0">
                <CourseEditorNavBarComponent
                    courseId = {match.params.courseId}
                    history = {history}
                />
                {/*<CourseEditorDropdownsContainer*/}
                {/*    courseId = {match.params.courseId}*/}
                {/*    moduleId = {match.params.moduleId}*/}
                {/*    lessonId = {match.params.lessonId}*/}
                {/*    history = {history}*/}
                {/*    params = {match.params}*/}
                {/*/>*/}
            </div>

            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-3">
                        <ModuleListContainer
                            courseId = {match.params.courseId}
                            history = {history}
                            params = {match.params}
                        />
                    </div>
                    <div className="col-9">
                        <div className="my-2">
                            <LessonTabsContainer
                                courseId = {match.params.courseId}
                                moduleId = {match.params.moduleId}
                                history = {history}
                                params = {match.params}/>
                        </div>

                        <div>
                            <TopicPillsContainer
                                    courseId = {match.params.courseId}
                                    moduleId = {match.params.moduleId}
                                    lessonId = {match.params.lessonId}
                                    history = {history}
                                    params = {match.params}/>
                        </div>
                        <div>
                            {match.params.topicId !== undefined &&
                            <WidgetListContainer
                                courseId = {match.params.courseId}
                                moduleId = {match.params.moduleId}
                                lessonId = {match.params.lessonId}
                                topicId = {match.params.topicId}
                                history = {history}
                                params = {match.params}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorContainer