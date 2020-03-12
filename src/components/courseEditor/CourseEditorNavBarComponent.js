import React from "react";
import {Link} from "react-router-dom";

const CourseEditorNavBarComponent = ({courseTitle, layout}) =>
    <nav className="navbar navbar-dark bg-dark row">
        <Link to={`/courseList/${layout}`} className="fas fa-times fa-lg wbdv-close mt-1 col-1 text-center" style={{color: 'white'}}>
        </Link>
        <div className="navbar-brand font-weight-bold wbdv-course-editor-title col">
            {courseTitle}
        </div>
    </nav>;

export default CourseEditorNavBarComponent
