import React from "react";
import CourseRowComponent from "./CourseRowComponent";


const CourseTableComponent = ({courses, deleteCourse, editCourse, updateCourse, toggle}) =>
    <div>
        <div className="container col-12" id="firstRow">
            <div id="table-title" className="row my-3">
                <div className="col-8 col-md-6 col-lg-6 wbdv-header wbdv-title ml-2">Title</div>
                <div className="col-md-4 col-lg-2 px-1 text-center wbdv-header wbdv-owner d-none d-md-block">Owned by</div>
                <div className="col-lg-2 px-1 text-center wbdv-header wbdv-last-modified d-none d-lg-block">Last Modified</div>
                <div className="col">
                    <i className="fas fa-sort-alpha-down ml-2 float-right wbdv-header wbdv-sort"> </i>
                    <i className="fas fa-th mr-2 float-right wbdv-button wbdv-grid-layout" onClick={()=>toggle()}> </i>
                </div>
            </div>
        </div>

        <ul className="list-group">
            {
                courses.map(course =>
                    <CourseRowComponent
                        editCourse={editCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        key={course._id}
                        course={course}/>
                )
            }
        </ul>
    </div>

export default CourseTableComponent