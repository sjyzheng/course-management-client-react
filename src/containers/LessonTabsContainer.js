import React from "react";
import {connect} from "react-redux";
import {findLessonsForModule, createLesson, deleteLesson, updateLesson} from "../actions/lessonActions";
import LessonService from "../services/LessonService";
import LessonTabsItemComponent from "../components/courseEditor/LessonTabsItemComponent";

class LessonTabsContainer extends React.Component {
    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    render() {
        return (
            <div className="nav nav-tabs nav-fill">
                {this.props.lessons && this.props.lessons.map(lesson =>
                    <LessonTabsItemComponent
                        lesson = {lesson}
                        key = {lesson._id}
                        courseId = {this.props.courseId}
                        moduleId = {this.props.moduleId}
                        courseTitle = {this.props.courseTitle}
                        layout = {this.props.layout}
                        params = {this.props.params}
                        history = {this.props.history}
                        deleteLesson = {this.props.deleteLesson}
                        updateLesson = {this.props.updateLesson}

                    />
                )}

                <div className="nav-item">
                    {this.props.moduleId &&
                    <div className="nav-link"
                         onClick={() => {
                             this.props.createLesson(this.props.params.moduleId, {title: 'New Lesson'})
                         }}>
                        Add Lesson
                    </div>}
                </div>
            </div>
        )
    }
}


const lessonService = new LessonService();

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons
});

const dispatchToPropertyMapper = (dispatch) => ({
    createLesson: (moduleId, lesson) =>
        lessonService.createLesson(moduleId, lesson)
            .then(actualLesson => {
                dispatch(createLesson(actualLesson))}
            ),
    findLessonsForModule: (moduleId) =>
        lessonService.findLessonsForModule(moduleId)
            .then(lessons =>
                dispatch(findLessonsForModule(lessons))),
    deleteLesson: (lessonId) =>
        lessonService.deleteLesson(lessonId)
            .then(state =>
                dispatch(deleteLesson(lessonId))
            ),
    updateLesson: (lessonId, lesson) =>
        lessonService.updateLesson(lessonId, lesson)
            .then( state =>
                dispatch(updateLesson(lesson, lessonId))
            )
});

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(LessonTabsContainer);
