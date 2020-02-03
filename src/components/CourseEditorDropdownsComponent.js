import React from "react";

const CourseEditorDropdownsComponent = () => (
    <div>
        <div className="d-block d-lg-none">
            <div className="dropdown m-2">
                <button className="btn btn-block btn-secondary dropdown-toggle" type="button" id="dropdownModule"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Modules
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Module 1 - jQuery</a>
                    <a className="dropdown-item" href="#">Module 2 - React</a>
                    <a className="dropdown-item" href="#">Module 3 - Redux</a>
                    <a className="dropdown-item" href="#">Module 4 - Native</a>
                    <a className="dropdown-item" href="#">Module 5 - Angular</a>
                    <a className="dropdown-item" href="#">Module 6 - Node</a>
                    <a className="dropdown-item" href="#">Module 7 - Mongo</a>
                    <a className="dropdown-item" href="#">Add Module</a>
                </div>
            </div>
        </div>

        <div className="d-block d-lg-none">
            <div className="dropdown m-2">
                <button className="btn btn-block btn-secondary dropdown-toggle" type="button" id="dropdownLesson"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Lessons
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Lesson 1</a>
                    <a className="dropdown-item" href="#">Lesson 2</a>
                    <a className="dropdown-item" href="#">Lesson 3</a>
                    <a className="dropdown-item" href="#">Add Lesson</a>

                </div>
            </div>
        </div>

        <div className="d-block d-md-none">
            <div className="dropdown m-2">
                <button className="btn btn-block btn-secondary dropdown-toggle" type="button" id="dropdownTopic"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Topics
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Topic 1</a>
                    <a className="dropdown-item" href="#">Topic 2</a>
                    <a className="dropdown-item" href="#">Topic 3</a>
                    <a className="dropdown-item" href="#">Topic 4</a>
                    <a className="dropdown-item" href="#">Add Topic</a>
                </div>
            </div>
        </div>
    </div>
)


export default CourseEditorDropdownsComponent