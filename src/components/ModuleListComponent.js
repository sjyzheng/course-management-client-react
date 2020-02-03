import React from "react";

const ModuleListComponent = () => (
    <div className="list-group bg-dark min-vh-100 wbdv-module-list">
        <div
            className="list-group-item list-group-item-dark border-0 active mx-3 mt-3 rounded wbdv-module-item">
            <i className="text-white text-truncate wbdv-module-item-title">
                Module 1 - jQuery
                <i className="fas fa-times float-lg-right mt-1 wbdv-module-item-delete-btn"> </i>
            </i>
        </div>
        <div
            className="list-group-item list-group-item-dark border-0 bg-secondary mx-3 mt-3 rounded wbdv-module-item">
            <i className="text-white text-truncate wbdv-module-item-title">
                Module 2 - React
                <i className="fas fa-times float-lg-right mt-1 wbdv-module-item-delete-btn"> </i>
            </i>
        </div>

        <div
            className="list-group-item list-group-item-dark border-0 bg-secondary mx-3 mt-3 rounded wbdv-module-item">
            <i className="text-white text-truncate wbdv-module-item-title">
                Module 3 - Redux
                <i className="fas fa-times float-lg-right mt-1 wbdv-module-item-delete-btn"> </i>
            </i>
        </div>

        <div
            className="list-group-item list-group-item-dark border-0 bg-secondary mx-3 mt-3 rounded wbdv-module-item">
            <i className="text-white text-truncate wbdv-module-item-title">
                Module 4 - Native
                <i className="fas fa-times float-lg-right mt-1 wbdv-module-item-delete-btn"> </i>
            </i>
        </div>

        <div
            className="list-group-item list-group-item-dark border-0 bg-secondary mx-3 mt-3 rounded wbdv-module-item">
            <i className="text-white text-truncate wbdv-module-item-title">
                Module 5 - Angular
                <i className="fas fa-times float-lg-right mt-1 wbdv-module-item-delete-btn"> </i>
            </i>
        </div>

        <div
            className="list-group-item list-group-item-dark border-0 bg-secondary mx-3 mt-3 rounded wbdv-module-item">
            <i className="text-white text-truncate wbdv-module-item-title">
                Module 6 - Node
                <i className="fas fa-times float-lg-right mt-1 wbdv-module-item-delete-btn"> </i>
            </i>
        </div>

        <div
            className="list-group-item list-group-item-dark border-0 bg-secondary mx-3 mt-3 rounded wbdv-module-item">
            <i className="text-white text-truncate wbdv-module-item-title">
                Module 7 - Mongo
                <i className="fas fa-times float-lg-right mt-1 wbdv-module-item-delete-btn"> </i>
            </i>
        </div>
        <i className="fas fa-plus text-right m-4 wbdv-module-item-delete-btn"> </i>
    </div>
)


export default ModuleListComponent