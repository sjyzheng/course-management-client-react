import React from "react";

class HeadingWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: this.props.editing,
            widget: this.props.widget,
            widgetId: this.props.widgetId,
            widgetText: this.props.widgetText,
            widgetTitle: this.props.widget.title
        }
    }


    render() {
        return(
            <div>
                {(this.props.previewing || !this.state.editing) &&
                <div className="row">
                    {this.state.widget.size === 1 && <h1>{this.state.widget.text}</h1>}
                    {this.state.widget.size === 2 && <h2>{this.state.widget.text}</h2>}
                    {this.state.widget.size === 3 && <h3>{this.state.widget.text}</h3>}
                    {this.state.widget.size === 4 && <h4>{this.state.widget.text}</h4>}
                    {this.state.widget.size === 5 && <h5>{this.state.widget.text}</h5>}
                    {this.state.widget.size === 6 && <h6>{this.state.widget.text}</h6>}

                    {!this.props.previewing &&
                    <i className="fas fa-pencil-alt fa-lg text-right mt-3 ml-5 wbdv-widget-edit-btn"
                       onClick={() => {
                           this.setState({editing: true});
                       }}>
                    </i>
                    }
                </div>}


                {(!this.props.previewing && this.state.editing) &&
                <div className="border m-3 p-2 rounded">
                    <div className="form-row d-flex justify-content-between">
                        <div className="col">
                            <h2>{this.state.widget.title}</h2>
                        </div>
                        <div className="col-lg-4 col-md-6 float-right">
                            <i className="fas fa-arrow-circle-up fa-2x mr-1"
                               onClick={() => this.props.moveUpWidget(this.state.widget)}> </i>
                            <i className="fas fa-arrow-circle-down fa-2x mr-1"
                               onClick={() => this.props.moveDownWidget(this.state.widget)}> </i>
                            <select className="custom-select mb-3 col-5 mr-1"
                                    value={this.state.widget.type}
                                    onChange={(e) => {
                                        const newType = e.target.value;
                                        // this.setState(prevState => ({
                                        //     widget: {
                                        //         ...prevState.widget,
                                        //         type: newType,
                                        //         title: (prevState.widgetTitle === "Heading Widget"? "Paragraph Widget":"Heading Widget"),
                                        //         size: 1
                                        //     }
                                        // }));
                                        this.props.updateWidgetType({...this.state.widget, type: newType, title: "Paragraph Widget", size: 1})
                                    }}>
                                <option value="HEADING">Heading</option>
                                <option value="PARAGRAPH">Paragraph</option>
                                {/*<option value="2">List</option>*/}
                                {/*<option value="3">Image</option>*/}
                            </select>
                            <i className="fas fa-times-circle fa-2x"
                               onClick={()=>{this.props.deleteWidget(this.state.widgetId)}}>
                            </i>
                            <i className="fas fa-check-circle fa-2x"
                               onClick={()=>{
                                   this.props.saveWidget(this.state.widget);
                                   this.setState({editing: false})
                               }}> </i>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1"> </label>
                        <input id="exampleFormControlInput1" className="form-control" type="text"
                               placeholder="Heading text"
                               value={this.state.widget.text}
                               onChange={(e) => {
                                   const newText = e.target.value;
                                   this.setState(prevState => ({
                                       widget: {
                                           ...prevState.widget,
                                           text: newText
                                       }
                                   }))
                               }}
                        />

                    </div>

                    <div className="form-group">

                        <select className="custom-select"
                                value={this.state.widget.size}
                                onChange={(e) => {
                                    let newSize = e.target.value;
                                    newSize = parseInt(newSize);
                                    this.setState(prevState => ({
                                        widget: {
                                            ...prevState.widget,
                                            size: newSize
                                        }
                                    }))
                                }}>
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input className="form-control" type="text"
                               placeholder="Widget name"/>
                    </div>
                    <h3>Preview</h3>
                    {this.state.widget.size === 1 && <h1>{this.state.widget.text}</h1>}
                    {this.state.widget.size === 2 && <h2>{this.state.widget.text}</h2>}
                    {this.state.widget.size === 3 && <h3>{this.state.widget.text}</h3>}
                    {this.state.widget.size === 4 && <h4>{this.state.widget.text}</h4>}
                    {this.state.widget.size === 5 && <h5>{this.state.widget.text}</h5>}
                    {this.state.widget.size === 6 && <h6>{this.state.widget.text}</h6>}
                </div>}
            </div>
        )
    }
}

export default HeadingWidget