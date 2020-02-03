import React from "react";

import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgeListComponent";
import CourseEditorDropdownsComponent from "./CourseEditorDropdownsComponent";

const CourseEditorComponent = () => (
    <div>
        <div className="container-fluid p-0">
            <LessonTabsComponent/>
        </div>

        <div className="container-fluid p-0">
            <CourseEditorDropdownsComponent/>
        </div>

        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-3 d-none d-lg-block">
                    <ModuleListComponent/>
                </div>
                    <div className="col-lg-9 col-12">
                        <div className="d-none d-md-block">
                            <TopicPillsComponent/>
                        </div>
                        <WidgetListComponent/>
                </div>
            </div>
        </div>
    </div>
)

export default CourseEditorComponent