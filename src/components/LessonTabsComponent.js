import React from "react";

const LessonTabsComponent = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
            <a className="fas fa-times wbdv-course-editor wbdv-close" href="/"> </a>
            <i className="navbar-brand col-3 mr-sm-3 font-weight-bold">
                CS5610 - WebDev</i>
        </div>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <div className="navbar-nav list-group list-group-horizontal col-10">
                <i className="nav-item list-group-item list-group-item-action list-group-item-light border-0 font-weight-bold bg-dark active px-4 text-center wbdv-page-tab"
                    > Lesson 1</i>
                <i className="nav-item list-group-item list-group-item-action list-group-item-light border-0 font-weight-bold bg-dark px-4 text-center wbdv-page-tab"
                    > Lesson 2</i>
                <i className="nav-item list-group-item list-group-item-action list-group-item-light border-0 font-weight-bold bg-dark px-4 text-center wbdv-page-tab"
                    > Lesson 3</i>
                <i className="nav-item list-group-item list-group-item-action list-group-item-light border-0 font-weight-bold bg-dark px-4 text-center wbdv-page-tab"
                    > Lesson 4</i>
                <i className="nav-item list-group-item list-group-item-action list-group-item-light border-0 font-weight-bold bg-dark px-4 text-center wbdv-page-tab"
                    > Lesson 5</i>

            </div>
        </div>
        <div>
            <i className="fas fa-plus collapse navbar-collapse wbdv-new-page-btn"> </i>
        </div>
        <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> </span>
            </button>
        </div>
    </nav>
)


export default LessonTabsComponent