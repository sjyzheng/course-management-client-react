import React from "react";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";

class WidgetListItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: this.props.editing,
            topicId: this.props.topicId,
            widget: this.props.widget,
            widgetId: this.props.widget.id,
            widgetText: this.props.widget.text
        }
    }

    saveWidget = (updatedWidget) => {
        this.setState({
            editing: false,
            widget: updatedWidget
        });
        this.props.updateWidget(updatedWidget.id, updatedWidget)
    };

    updateWidgetType = (updatedWidget) => {
        this.setState({
            editing: true,
            widget: updatedWidget
        });
        this.props.updateWidget(updatedWidget.id, updatedWidget)
    };

    moveUpWidget = (widget) => {
        this.props.moveUpWidget(widget.id);
    };

    moveDownWidget = (widget) => {
        this.props.moveDownWidget(widget.id);
    };


    render() {
        return (
            <div>
                {this.state.widget.type === "HEADING" &&
                <HeadingWidget
                    widget = {this.state.widget}
                    widgetId = {this.state.widgetId}
                    widgetText = {this.props.widgetText}
                    editing = {this.state.editing}
                    previewing = {this.props.previewing}
                    saveWidget = {this.saveWidget}
                    updateWidgetType = {this.updateWidgetType}
                    deleteWidget = {this.props.deleteWidget}
                    moveUpWidget = {this.moveUpWidget}
                    moveDownWidget = {this.moveDownWidget}
                    topicId = {this.state.topicId}
                />}
                {this.state.widget.type === "PARAGRAPH" &&
                <ParagraphWidget
                    widget = {this.state.widget}
                    widgetId = {this.state.widgetId}
                    widgetText = {this.props.widgetText}
                    editing = {this.state.editing}
                    previewing = {this.props.previewing}
                    saveWidget = {this.saveWidget}
                    updateWidgetType = {this.updateWidgetType}
                    deleteWidget = {this.props.deleteWidget}
                    moveUpWidget = {this.moveUpWidget}
                    moveDownWidget = {this.moveDownWidget}
                    topicId = {this.state.topicId}
                />}
            </div>
        );
    }
}

export default WidgetListItemComponent