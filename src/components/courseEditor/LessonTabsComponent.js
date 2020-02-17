import React from "react";
import LessonTabsItemComponent from "./LessonTabsItemComponent";

class LessonTabsComponent extends React.Component {
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
                        deleteLesson = {this.props.deleteLesson}
                        updateLesson = {this.props.updateLesson}
                        params = {this.props.params}
                        history = {this.props.history}
                    />
                )}

                <div className="nav-item">
                    {console.log(this.props.lessons)}
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

// const LessonTabsComponent = ({course}) => (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div>
//             <Link to="/" className="fas fa-times wbdv-course-editor wbdv-close"> </Link>
//             <i className="navbar-brand col-3 mr-sm-3 font-weight-bold">
//                 {course.title}</i>
//         </div>
//
//         <div className="collapse navbar-collapse justify-content-center" >
//             <div className="navbar-nav list-group list-group-horizontal col-10">
//                 <i className="nav-item list-group-item list-group-item-action list-group-item-light border-0 font-weight-bold bg-dark active px-4 text-center wbdv-page-tab"
//                     > Lesson 1</i>
//                 <i className="nav-item list-group-item list-group-item-action list-group-item-light border-0 font-weight-bold bg-dark px-4 text-center wbdv-page-tab"
//                     > Lesson 2</i>
//                 <i className="nav-item list-group-item list-group-item-action list-group-item-light border-0 font-weight-bold bg-dark px-4 text-center wbdv-page-tab"
//                     > Lesson 3</i>
//                 <i className="nav-item list-group-item list-group-item-action list-group-item-light border-0 font-weight-bold bg-dark px-4 text-center wbdv-page-tab"
//                     > Lesson 4</i>
//                 <i className="nav-item list-group-item list-group-item-action list-group-item-light border-0 font-weight-bold bg-dark px-4 text-center wbdv-page-tab"
//                     > Lesson 5</i>
//
//             </div>
//         </div>
//         <div>
//             <i className="fas fa-plus collapse navbar-collapse wbdv-new-page-btn"> </i>
//         </div>
//         <div>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
//                     aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"> </span>
//             </button>
//         </div>
//     </nav>
// )


export default LessonTabsComponent