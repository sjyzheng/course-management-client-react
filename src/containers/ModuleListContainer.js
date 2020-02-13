import React from "react";
import {connect} from "react-redux";
import {findModulesForCourse, createModule, deleteModule, updateModule} from "../actions/moduleActions";
import ModuleListComponent from "../components/courseEditor/ModuleListComponent";
import ModuleService from "../services/ModuleService";

const moduleService = new ModuleService();

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules
});

const dispatchToPropertyMapper = (dispatch) => ({
    createModule: (courseId, module) =>
        moduleService.createModule(courseId, module)
            .then(actualModule =>
                dispatch(createModule(actualModule))
            ),
    findModulesForCourse: (courseId) =>
        moduleService.findModulesForCourse(courseId)
            .then(modules =>
                dispatch(findModulesForCourse(modules))),
    deleteModule: (moduleId) =>
        moduleService.deleteModule(moduleId)
            .then(state =>
                dispatch(deleteModule(moduleId))
            ),
    updateModule: (moduleId, module) =>
        moduleService.updateModule(moduleId, module)
            .then( state =>
                dispatch(updateModule(module,moduleId))
            )
});
const ModuleListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListComponent);

export default ModuleListContainer