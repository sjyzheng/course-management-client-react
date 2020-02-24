import React from "react";
import WidgetListItemComponent from "./WidgetListItemComponent";
import {previewWidgets} from "../../actions/widgetActions";
import Switch from "react-switch"


class WidgetListComponent extends React.Component {
    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.topicId !== prevProps.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
            this.setState({previewing: false})
        }
    }

    state = {
        editing: false,
        previewing: false,
        topicId: this.props.topicId,
    }

    previewWidgets = () => {
        this.setState(prevState => ({
            previewing: !prevState.previewing
        }));
    };

    render(){
        return (
            <div>
                <div className="row justify-content-end mt-2 mr-3">
                    <label className="mr-3" htmlFor="switchControl">Preview</label>
                    <Switch id="switchControl" onChange={this.previewWidgets} checked={this.state.previewing} />
                </div>

                <div>
                    {this.props.widgets && this.props.widgets
                        // .sort((a,b) => {
                        //     if (a.order > b.order) return 1;
                        //     else return -1;
                        // })
                        .map(widget =>
                        <div key={widget.id}>
                            <WidgetListItemComponent
                                widgets = {this.props.widgets}
                                widget = {widget}
                                courseId = {this.props.courseId}
                                moduleId = {this.props.moduleId}
                                lessonId = {this.props.lessonId}
                                topicId = {this.state.topicId}
                                editing = {this.state.editing}
                                previewing = {this.state.previewing}
                                deleteWidget = {this.props.deleteWidget}
                                updateWidget = {this.props.updateWidget}
                                moveUpWidget = {this.props.moveUpWidget}
                                moveDownWidget = {this.props.moveDownWidget}
                                params = {this.props.params}
                                history = {this.props.history}
                            />
                        </div>
                    )}
                </div>


                <div className="fas fa-plus-circle fa-2x float-right mr-2 wbdv-button wbdv-add-course"
                     onClick={()=>{
                         this.props.createWidget(this.props.topicId,
                             {text: 'New Widget',
                                 id: (new Date()).getTime()+"",
                             })
                     }}>
                </div>
            </div>
        )
    }

}

export default WidgetListComponent