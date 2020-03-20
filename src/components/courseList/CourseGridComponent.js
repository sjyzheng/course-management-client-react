import React from "react";
import CourseGridCardComponent from "./CourseGridCardComponent";
import {Link} from "react-router-dom";

const CourseGridComponent = ({courses, deleteCourse, editCourse, updateCourse, sortCourses, order}) =>
    <div>
        <div className="container col-12" id="firstRow">
            <div id="grid-title" className="row my-3">
                <div className="col-6 wbdv-header wbdv-title ml-2">Recent Document</div>
                <div className="col-md-2 px-1 text-center dropdown-toggle wbdv-header wbdv-owner d-none d-md-block">Owned by me</div>
                <div className="col">
                    <i className="fas fa-folder mx-2 float-right wbdv-folder"> </i>
                    <i className={`${order === 'aToZ'? 'fas fa-sort-alpha-down': 'fas fa-sort-alpha-up'} mx-2 float-right wbdv-header wbdv-sort-button`} onClick={sortCourses}> </i>
                    <Link to="/courseList/table" className="fas fa-list mx-2 float-right wbdv-button wbdv-list-layout"> </Link>
                </div>
            </div>
        </div>

        <div className="card-deck">
            {
                courses.map(course =>
                    <CourseGridCardComponent
                        editCourse={editCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        key={course.id}
                        course={course}/>
                )
            }
        </div>
    </div>


export default CourseGridComponent
