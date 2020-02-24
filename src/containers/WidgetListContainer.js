import React from "react";
import {connect} from "react-redux";
import WidgetService from "../services/WidgetService";
import WidgetListComponent from "../components/courseEditor/WidgeListComponent";
import {
    createWidget,
    deleteWidget,
    findWidgetsForTopic,
    moveDownWidget,
    moveUpWidget,
    updateWidget,
    previewWidgets
} from "../actions/widgetActions";


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
const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetListComponent);

export default WidgetListContainer