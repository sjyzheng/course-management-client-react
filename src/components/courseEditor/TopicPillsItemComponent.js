import React from "react";
import {Link} from "react-router-dom";

class TopicPillsItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            editing: false,
            topicId: this.props.topic._id,
            topicTitle: this.props.topic.title
        }
    }

    // selectLesson = () => {
    //     this.setState(prevState => ({
    //         editing: false,
    //         lessonTitle: this.state.lessonTitle
    //     }))
    // }

    editTopic = () => {
        this.setState(prevState => ({
            active: true,
            editing: !prevState.editing
        }))
    }

    saveTopic = (topic) =>{
        if (this.state.topicTitle === '') {
            alert('Please Enter a Valid Topic Title!');
        } else {
            this.setState(prevState => ({
                editing: !prevState.editing,
                active: !prevState.active
            }));
            topic.title=this.state.topicTitle;
            this.props.updateTopic(topic._id, topic)
        }
    }

    updateForm = (e) => {
        this.setState({
            topicTitle: e.target.value
        })
    }

    render() {
        return (
            <div className={`nav-item`}>
                {!this.state.editing &&
                <div className={`nav-link mx-1 ${(this.state.topicId === this.props.params.topicId || this.state.active)?'active': 'bg-light'}`}>
                    <Link to={`/courses/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.props.lessonId}/topics/${this.state.topicId}`}
                          className="text-truncate wbdv-topic-item-title text-dark"
                          key={this.state.topicId}>
                        {this.state.topicTitle}
                    </Link>
                    <i className="fas fa-pencil-alt text-right mt-1 ml-1 wbdv-lesson-item-edit-btn" onClick={(e) => {
                        e.stopPropagation();
                        this.editTopic();}}>
                    </i>
                </div>
                }

                {this.state.editing &&
                    <div className={`nav-link form-inline mx-1 ${(this.state.topicId === this.props.params.topicId || this.state.active)?'active':''}`}>
                        <input className="wbdv-topic-editFld form-control mr-1"
                               type="search"
                               value={this.state.topicTitle}
                               placeholder="Enter a New Title"
                               onChange={this.updateForm}/>
                        <i className="fas fa-check"
                           onClick={() => this.saveTopic(this.props.topic)}>
                        </i>
                        <i className="far fa-trash-alt mx-2"
                           onClick={() => {
                               this.props.deleteTopic(this.state.topicId);
                               if (this.state.active) {
                                   this.props.history.push(`/courses/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.props.lessonId}/topics/topicList`)
                               }
                           }}>
                        </i>
                    </div>
                }
            </div>
        );
    }
}

export default TopicPillsItemComponent;