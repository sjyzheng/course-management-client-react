import React from "react";
import {connect} from "react-redux";
import {findTopicsForLesson, deleteTopic, updateTopic, createTopic} from "../actions/topicActions";
import TopicService from "../services/TopicService";
import TopicPillsItemComponent from "../components/courseEditor/TopicPillsItemComponent";

class TopicPillsContainer extends React.Component {
    componentDidMount() {
        if (!this.props.lessonId) { return; }
        this.props.findTopicsForLesson(this.props.lessonId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.lessonId !== prevProps.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    render() {
        return (
            <div className="nav nav-pills nav-fill my-2 text-nowrap wbdv-topic-pill-list">
                {this.props.topics.length > 0 && this.props.lessonId && this.props.topics.map(topic =>
                    <TopicPillsItemComponent
                        topic = {topic}
                        key = {topic.id}
                        courseId = {this.props.courseId}
                        courseTitle = {this.props.courseTitle}
                        moduleId = {this.props.moduleId}
                        lessonId = {this.props.lessonId}
                        layout = {this.props.layout}
                        params = {this.props.params}
                        history = {this.props.history}
                        deleteTopic = {this.props.deleteTopic}
                        updateTopic = {this.props.updateTopic}
                    />
                )}

                {this.props.lessonId &&
                <div className={`nav-item`}>
                    <div className="nav-link bg-light mx-1 wbdv-topic-add-btn"
                         onClick={()=>
                             this.props.createTopic(this.props.lessonId, {})
                                 .then(result =>
                                     this.props.history.push({
                                         pathname: `/courses/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.props.lessonId}/topics/${result.topic.id}`,
                                         state: {courseTitle: this.props.courseTitle,
                                             layout: this.props.layout}})
                                 ).then(state => this.props.updateCourse)}>
                        Add Topic
                    </div>
                </div>}
            </div>
        )
    }
}

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
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(TopicPillsContainer);
