import React from "react";
import {Link} from "react-router-dom";

class LessonTabsItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            editing: false,
            lessonId: this.props.lesson.id,
            lessonTitle: this.props.lesson.title
        }
    }

    editLesson = () => {
        this.setState(prevState => ({
            active: true,
            editing: !prevState.editing
        }))
    }

    saveLesson = (lesson) =>{
        if (this.state.lessonTitle === '') {
            alert('Please Enter a Valid Lesson Title!');
        } else {
            this.setState(prevState => ({
                editing: !prevState.editing,
                active: !prevState.active
            }));
            lesson.title=this.state.lessonTitle;
            this.props.updateLesson(lesson.id, lesson)
        }
    }

    updateForm = (e) => {
        this.setState({
            lessonTitle: e.target.value
        })
    }

    render() {
        return (
            <div className={`nav-item wbdv-lesson-item`} data-toggle="tooltip" data-placement="right" title={this.state.lessonTitle}>

                {!this.state.editing &&
                    <div className={`nav-link mx-1 ${(this.state.lessonId === this.props.params.lessonId || this.state.active)?'active':''}`} >
                        <Link to={{
                            pathname: `/courses/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.state.lessonId}`,
                            state: {courseTitle: this.props.courseTitle,
                                layout: this.props.layout}}}
                              className="text-truncate wbdv-module-item-title text-dark"
                              key={this.state.lessonId}>
                            {this.state.lessonTitle}
                        </Link>
                        <i className="fas fa-pencil-alt text-right mt-1 ml-1 wbdv-lesson-item-edit-btn" onClick={(e) => {
                            e.stopPropagation();
                            this.editLesson();
                        }}> </i>
                    </div>
                }


                {this.state.editing &&
                    <div className="nav-link form-inline mx-1 active">
                        <input className="wbdv-lesson-editFld form-control mr-1"
                               type="search"
                               value={this.state.lessonTitle}
                               placeholder="Enter a New Title"
                               onChange={this.updateForm}/>
                        <i className="fas fa-check"
                           onClick={() => this.saveLesson(this.props.lesson)}>
                        </i>
                        <i className="far fa-trash-alt mx-2"
                           onClick={() => {
                               this.props.deleteLesson(this.state.lessonId);
                               if (this.state.lessonId === this.props.params.lessonId) {
                                   this.props.history.push({
                                       pathname: `/courses/${this.props.courseId}/modules/${this.props.moduleId}`,
                                       state: {courseTitle: this.props.courseTitle,
                                           layout: this.props.layout}})
                               }
                           }}>
                        </i>
                    </div>
                }
            </div>
        );
    }
}

export default LessonTabsItemComponent;
