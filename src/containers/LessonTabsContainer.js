import React from "react";
import {connect} from "react-redux";
import {findLessonsForModule, createLesson, deleteLesson, updateLesson} from "../actions/lessonActions";
import LessonTabsComponent from "../components/courseEditor/LessonTabsComponent";
import LessonService from "../services/LessonService";

const lessonService = new LessonService();

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons
});

const dispatchToPropertyMapper = (dispatch) => ({
    createLesson: (moduleId, lesson) =>
        lessonService.createLesson(moduleId, lesson)
            .then(actualLesson =>
                dispatch(createLesson(actualLesson))
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
const LessonTabsContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(LessonTabsComponent);

export default LessonTabsContainer