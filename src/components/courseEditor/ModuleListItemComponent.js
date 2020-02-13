import React from "react";
import {Link} from "react-router-dom";

class ModuleListItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            editing: false,
            moduleId: this.props.module._id,
            moduleTitle: this.props.module.title
        }
    }

    selectModule = () => {
        this.setState({
            editing: false,
        })
    }

    editModule = () => {
        this.setState(prevState => ({
            active: !prevState.active,
            editing: !prevState.editing
        }))
    }

    saveModule = (module) =>{
        // console.log(module);
        if (this.state.moduleTitle === '') {
            alert('Please Enter a Valid Module Title!');
        } else {
            this.setState(prevState => ({
                editing: !prevState.editing,
                active: !prevState.active
            }));
            module.title=this.state.moduleTitle;
            this.props.updateModule(module._id, module)
        }
    }

    updateForm = (e) => {
        this.setState({
            moduleTitle: e.target.value
        })
    }

    render() {
        return (
            <li className={`list-group-item border-0 mx-3 mt-3 rounded wbdv-module-item ${(this.state.moduleId === this.props.params.moduleId || this.state.active)?'active':''}`}>
                {!this.state.editing &&
                    <div className="row">
                        <Link to={`/courses/${this.props.courseId}/modules/${this.state.moduleId}/lessons/lessonList/topics/topicList`} className="text-white text-truncate wbdv-module-item-title ml-2 col-7" key={this.state.moduleId}>
                            {this.state.moduleTitle}
                        </Link>
                        <i className="fas fa-pencil-alt text-right mt-1 ml-2 wbdv-module-item-delete-btn col" onClick={(e) => {
                            e.stopPropagation();
                            this.editModule();
                        }}> </i>
                    </div>
                }

                {this.state.editing &&
                    <div className="form-row">
                        <input className="wbdv-module-editFld form-control col-8"
                               type="search"
                               value={this.state.moduleTitle}
                               placeholder="Enter a New Title"
                               onChange={this.updateForm}/>
                       <div className="col">
                           <i className="fas fa-check mt-2 ml-2"
                              onClick={()=>this.saveModule(this.props.module)}>
                           </i>
                           <i className="far fa-trash-alt float-right mt-2"
                              onClick={() => {
                                  this.props.deleteModule(this.state.moduleId);
                                  if (this.state.moduleId === this.props.params.moduleId) {
                                      this.props.history.push(`/courses/${this.props.courseId}/modules/moduleList/lessons/lessonList/topics/topicList`)
                                  }
                              }}>
                           </i>
                       </div>
                    </div>
                }
            </li>
        );
    }
}

export default ModuleListItemComponent;