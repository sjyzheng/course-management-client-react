import {TOPICS_WIDGETS_API_URL} from "../common/constants";
import {WIDGETS_API_URL} from "../common/constants";

class WidgetService {
    createWidget = (topicId, widget) => {
        return fetch(TOPICS_WIDGETS_API_URL(topicId), {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findWidgetsForTopic = (topicId) => {
        return fetch(TOPICS_WIDGETS_API_URL(topicId))
            .then(response => response.json())
    }

    findWidget = (widgetId) => {
        return fetch(`${WIDGETS_API_URL}/${widgetId}`)
            .then(response => response.json())
    }

    updateWidget = (widgetId, widget) => {
        return fetch(`${WIDGETS_API_URL}/${widgetId}`, {
            method: 'PUT',
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }

    deleteWidget = (widgetId) => {
        return fetch(`${WIDGETS_API_URL}/${widgetId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }

    // moveWidget = (widgetId, widget) => {
    //     return fetch(`${WIDGETS_API_URL}/${widgetId}`, {
    //         method: 'PUT',
    //         body: JSON.stringify(widget),
    //         headers: {
    //             "content-type": "application/json"
    //         }
    //     }).then(response => response.json())
    // }
}

export default WidgetService