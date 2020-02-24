export const CREATE_WIDGET = "CREATE_WIDGET"
export const createWidget = (widget) => ({
    type: CREATE_WIDGET,
    widget: widget
})

export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"
export const findWidgetsForTopic = (widgets) => ({
    type: FIND_WIDGETS_FOR_TOPIC,
    widgets: widgets
})

export const DELETE_WIDGET = "DELETE_WIDGET"
export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})

export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const updateWidget = (widget, widgetId) => ({
    type: UPDATE_WIDGET,
    widget: widget,
    widgetId: widgetId
})

export const WIDGET_POSITION_UP = "WIDGET_POSITION_UP"
export const moveUpWidget = (widgetId) => ({
    type: WIDGET_POSITION_UP,
    widgetId: widgetId
})

export const WIDGET_POSITION_DOWN = "WIDGET_POSITION_DOWN"
export const moveDownWidget = (widgetId) => ({
    type: WIDGET_POSITION_DOWN,
    widgetId: widgetId
})

// export const PREVIEW_WIDGETS = "PREVIEW_WIDGETS"
// export const previewWidgets = (previewing) => ({
//     type: PREVIEW_WIDGETS,
//     previewing: previewing
// })


