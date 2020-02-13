import React from "react";

import WidgetListComponent from "./WidgeListComponent";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";
import ModuleListContainer from "../../containers/ModuleListContainer";
import {combineReducers, createStore} from "redux";
import LessonTabsContainer from "../../containers/LessonTabsContainer";
import CourseEditorNavBarComponent from "./CourseEditorNavBarComponent";
import TopicPillsContainer from "../../containers/TopicPillsContainer";
// import CourseEditorDropdownsContainer from "../../containers/CourseEditorDropdownsContainer";
// import CourseEditorDropdownsComponent from "./CourseEditorDropdownsComponent";

const rootReducer = combineReducers({
    moduleReducer,
    lessonReducer,
    topicReducer
})

const store = createStore(rootReducer);

const CourseEditorComponent = ({match, history}) =>
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
                            {match.params.moduleId !== 'moduleList'? <LessonTabsContainer
                                courseId = {match.params.courseId}
                                moduleId = {match.params.moduleId}
                                history = {history}
                                params = {match.params}/>
                            :''}
                        </div>

                        <div>
                            {match.params.lessonId !== 'lessonList'? <TopicPillsContainer
                                    courseId = {match.params.courseId}
                                    moduleId = {match.params.moduleId}
                                    lessonId = {match.params.lessonId}
                                    history = {history}
                                    params = {match.params}/>
                                :''}
                        </div>
                        <div>
                            {match.params.topicId !== 'topicList'? <WidgetListComponent/>:''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorComponent