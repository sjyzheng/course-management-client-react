import React from "react";
import {connect} from "react-redux";
import {findTopicsForLesson, deleteTopic, updateTopic, createTopic} from "../actions/topicActions";
import TopicPillsComponent from "../components/courseEditor/TopicPillsComponent";
import TopicService from "../services/TopicService";


const topicService = new TopicService();

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics
});

const dispatchToPropertyMapper = (dispatch) => ({
    createTopic: (lessonId, topic) =>
        topicService.createTopic(lessonId, topic)
            .then(actualTopic =>
                dispatch(createTopic(actualTopic))
            ),
    findTopicsForLesson: (lessonId) =>
        topicService.findTopicsForLesson(lessonId)
            .then(topics =>
                dispatch(findTopicsForLesson(topics))),
    deleteTopic: (topicId) =>
        topicService.deleteTopic(topicId)
            .then(state =>
                dispatch(deleteTopic(topicId))
            ),
    updateTopic: (topicId, topic) =>
        topicService.updateTopic(topicId, topic)
            .then( state =>
                dispatch(updateTopic(topic, topicId))
            )
});
const TopicPillsContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(TopicPillsComponent);

export default TopicPillsContainer