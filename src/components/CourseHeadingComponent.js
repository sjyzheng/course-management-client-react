import React from "react";

const CourseHeadingComponent = ({updateFormState, newCourseTitle, addCourse}) => (
    <div className="container-fluid p-0">
        <nav className="navbar navbar-light bg-light">
            <button className="navbar-toggler mr-2 wbdv-field wbdv-hamburger" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo" aria-controls="navbarTogglerDemo" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <i className="navbar-brand d-none d-lg-inline wbdv-label wbdv-course-manager">
                Course Manager</i>
            <input className="form-control justify-content-around mr-sm-2 col-7 wbdv-field wbdv-new-course"
                   type="search"
                   placeholder="New Course Title"
                   aria-label="Search"
                   onChange={updateFormState}
                   value={newCourseTitle}
            />
            <i className="fas fa-plus-circle fa-2x col-2 wbdv-button wbdv-add-course"
               onClick={addCourse}>
            </i>
        </nav>
    </div>
)

export default CourseHeadingComponent