import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {Link} from "react-router-dom";

const CourseTableComponent = ({courses, deleteCourse, editCourse, updateCourse, sortCourses, order}) =>
    <div>
        <div className="container col-12" id="firstRow">
            <div id="table-title" className="row my-3">
                <div className="col-8 col-md-6 col-lg-6 wbdv-header wbdv-title ml-2">Title</div>
                <div className="col-md-4 col-lg-2 px-1 text-center wbdv-header wbdv-owner d-none d-md-block">Owned by</div>
                <div className="col-lg-2 px-1 text-center wbdv-header wbdv-last-modified d-none d-lg-block">Last Modified</div>
                <div className="col">
                    <i className={`${order === 'aToZ'? 'fas fa-sort-alpha-down': 'fas fa-sort-alpha-up'} ml-2 float-right wbdv-sort-button`} onClick={sortCourses}> </i>
                    <Link to="/courseList/grid" className="fas fa-th mr-2 float-right wbdv-button wbdv-grid-layout">
                    </Link>
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
                        key={course.id}
                        course={course}/>
                )
            }
        </ul>
    </div>

export default CourseTableComponent
