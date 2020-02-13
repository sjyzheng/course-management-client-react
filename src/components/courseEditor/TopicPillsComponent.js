import React from "react";
import TopicPillsItemComponent from "./TopicPillsItemComponent";


class TopicPillsComponent extends React.Component {
    componentDidMount() {
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
                   {this.props.topics && this.props.topics.map(topic =>
                       <TopicPillsItemComponent
                           topic = {topic}
                           key = {topic._id}
                           courseId = {this.props.courseId}
                           moduleId = {this.props.moduleId}
                           lessonId = {this.props.lessonId}
                           deleteTopic = {this.props.deleteTopic}
                           updateTopic = {this.props.updateTopic}
                           params = {this.props.params}
                           history = {this.props.history}
                       />
                   )}
                   <div className={`nav-item`}>
                       <div className="nav-link bg-light mx-1 wbdv-topic-add-btn"
                            onClick={()=>{
                                this.props.createTopic(this.props.lessonId, {title: 'New Topic'})
                            }}>
                           Add Topic
                       </div>
                   </div>


                </div>
          )
    }
}





export default TopicPillsComponent