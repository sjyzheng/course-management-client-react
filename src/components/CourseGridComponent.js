import React from "react";
import CourseGridCardComponent from "./CourseGridCardComponent";

const CourseGridComponent = ({courses, deleteCourse, editCourse, updateCourse, toggle}) =>
    <div>
        <div className="container col-12" id="firstRow">
            <div id="grid-title" className="row my-3">
                <div className="col-6 wbdv-header wbdv-title ml-2">Recent Document</div>
                <div className="col-md-2 px-1 text-center dropdown-toggle wbdv-header wbdv-owner d-none d-md-block">Owned by me</div>
                <div className="col">
                    <i className="fas fa-folder mx-2 float-right wbdv-folder"> </i>
                    <i className="fas fa-sort-alpha-down mx-2 float-right wbdv-header wbdv-sort"> </i>
                    <i className="fas fa-list mx-2 float-right wbdv-button wbdv-list-layout" onClick={()=>toggle()}> </i>
                </div>
            </div>
        </div>

        <div className="card-deck">
            {
                courses.map((course, index) =>
                    <CourseGridCardComponent
                        editCourse={editCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        key={course._id}
                        course={course}/>
                )
            }
        </div>
    </div>


export default CourseGridComponent