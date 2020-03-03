import React from "react";
import {connect} from "react-redux";
import {findModulesForCourse, createModule, deleteModule, updateModule} from "../actions/moduleActions";
import ModuleService from "../services/ModuleService";
import ModuleListItemComponent from "../components/courseEditor/ModuleListItemComponent";

class ModuleListContainer extends React.Component {
    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.courseId !== prevProps.courseId) {
            this.props.findModulesForCourse(this.props.courseId)
        }
    }

    render() {
        return (
            <div className="list-group bg-dark min-vh-100 wbdv-module-list">
                {this.props.modules && this.props.modules.map(module =>
                    <ModuleListItemComponent
                        module = {module}
                        key = {module._id}
                        courseId = {this.props.courseId}
                        courseTitle = {this.props.courseTitle}
                        layout = {this.props.layout}
                        params = {this.props.params}
                        history = {this.props.history}
                        deleteModule = {this.props.deleteModule}
                        updateModule = {this.props.updateModule}
                    />
                )}

                <div className={`list-group-item border-0 mx-3 mt-3 rounded wbdv-add-module text-center text-white text-truncate`}
                     data-toggle="tooltip" data-placement="right" title="Add Module"
                     style={{backgroundColor : "#FFA000"}}
                     onClick={
                         () => this.props.createModule(this.props.courseId, {title: 'New Module'})}>
                    Add Module
                </div>
            </div>
        );
    }
}



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
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListContainer);
