import React from "react";
import {connect} from "react-redux";
import WidgetService from "../services/WidgetService";
import {createWidget, deleteWidget, findWidgetsForTopic, moveDownWidget, moveUpWidget, updateWidget}from "../actions/widgetActions";
import Switch from "react-switch";
import WidgetListItemComponent from "../components/courseEditor/WidgetListItemComponent";

class WidgetListContainer extends React.Component {
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
                <div>
                    {this.props.widgets.length !== 0 &&
                    <div className="row justify-content-end mt-2 mr-3">
                        <label className="mr-3" htmlFor="switchControl">Preview</label>
                        <Switch id="switchControl" onChange={this.previewWidgets} checked={this.state.previewing} />
                    </div>
                    }
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
                                    topicId = {this.state.topicId}
                                    editing = {this.state.editing}
                                    previewing = {this.state.previewing}
                                    deleteWidget = {this.props.deleteWidget}
                                    updateWidget = {this.props.updateWidget}
                                    moveUpWidget = {this.props.moveUpWidget}
                                    moveDownWidget = {this.props.moveDownWidget}
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



const widgetService = new WidgetService();

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    previewing: state.widgetReducer.previewing
});

const dispatchToPropertyMapper = (dispatch) => ({
    createWidget: (topicId, widget) =>
        widgetService.createWidget(topicId, widget)
            .then(actualWidget =>
                dispatch(createWidget(actualWidget))),

    findWidgetsForTopic: (topicId) =>
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets =>
                dispatch(findWidgetsForTopic(widgets))),

    deleteWidget: (widgetId) =>
        widgetService.deleteWidget(widgetId)
            .then(state =>
                dispatch(deleteWidget(widgetId))),

    updateWidget: (widgetId, widget) =>
        widgetService.updateWidget(widgetId, widget)
            .then( state =>
                dispatch(updateWidget(widget, widgetId))),

    moveUpWidget: (widgetId) =>
        dispatch(moveUpWidget(widgetId)),

    moveDownWidget: (widgetId) =>
        dispatch(moveDownWidget(widgetId)),

});
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetListContainer);
