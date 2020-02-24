import {
    CREATE_WIDGET,
    DELETE_WIDGET,
    FIND_WIDGETS_FOR_TOPIC, PREVIEW_WIDGETS,
    UPDATE_WIDGET,
    WIDGET_POSITION_DOWN,
    WIDGET_POSITION_UP
} from "../actions/widgetActions";

const widgetReducer = (state = {widgets: [], previewing: false}, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(widget =>
            widget.id === action.widgetId ? action.widget : widget)
        }
        case WIDGET_POSITION_UP:
            let upFromIndex = state.widgets.findIndex((widget) => widget.id === action.widgetId);
            if (upFromIndex === 0) return {widgets: state.widgets};
            else {
                let newUpWidgets = [...state.widgets];
                let upToIndex = upFromIndex-1;
                let upTemp = newUpWidgets[upFromIndex];
                newUpWidgets.splice(upFromIndex,1);
                newUpWidgets.splice(upToIndex,0, upTemp);
                return {
                    widgets: newUpWidgets
                };
            }
        case WIDGET_POSITION_DOWN:
            let downFromIndex = state.widgets.findIndex((widget) => widget.id === action.widgetId);
            if (downFromIndex === state.widgets.length-1) return {widgets: state.widgets};
            else {
                let newDownWidgets = [...state.widgets];
                let downToIndex = downFromIndex+1;
                let downTemp = newDownWidgets[downToIndex];
                newDownWidgets.splice(downToIndex,1);
                newDownWidgets.splice(downFromIndex,0, downTemp);
                return {
                    widgets: newDownWidgets
                };
            }

        default:
            return state
    }
}


export default widgetReducer