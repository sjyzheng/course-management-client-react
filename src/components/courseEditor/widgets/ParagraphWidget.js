import React from "react";

class ParagraphWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: this.props.editing,
            widget: this.props.widget,
        }
    }

    render() {
        return(
            <div>
                {(this.props.previewing || !this.state.editing) &&
                <div className="row align-items-center">
                    <p>{this.state.widget.text}</p>
                    {!this.props.previewing &&
                    <i className="fas fa-pencil-alt text-right ml-5 wbdv-widget-edit-btn"
                       onClick={() => {
                           this.setState({editing: true})
                       }}>
                    </i>}
                </div>}

                {(!this.props.previewing && this.state.editing) &&
                <div className="border m-3 p-2 rounded">
                    <div className="form-row d-flex justify-content-between">
                        <div className="col">
                            <h2>{this.state.widget.title}</h2>
                        </div>
                        <div className="col-lg-4 col-md-6 float-right">
                            <i className="fas fa-arrow-circle-up fa-2x mr-1"
                               style={{color: "gold" }}
                               onClick={() => this.props.moveUpWidget(this.state.widget)}> </i>
                            <i className="fas fa-arrow-circle-down fa-2x mr-1"
                               style={{color: "gold" }}
                               onClick={() => this.props.moveDownWidget(this.state.widget)}> </i>

                            <select className="custom-select mb-3 col-5 mr-1"
                                    value={this.state.widget.type}
                                    onChange={(e) => {
                                        const newType = e.target.value;
                                        this.props.updateWidgetType({...this.state.widget,
                                            type: newType,
                                            title: `${newType} Widget`,
                                            size: 1,
                                            listType: "Unordered",
                                            src: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                        })
                                    }}>
                                <option value="Heading">Heading</option>
                                <option>Paragraph</option>
                                <option value="List">List</option>
                                <option value="Image">Image</option>
                            </select>
                            <i className="fas fa-times-circle fa-2x"
                               style={{color: "red"}}
                               onClick={()=>{this.props.deleteWidget(this.state.widget.id)}}>
                            </i>
                            <i className="fas fa-check-circle fa-2x"
                               style={{color: "LawnGreen"}}
                               onClick={()=>{
                                   this.props.saveWidget(this.state.widget);
                                   this.setState({editing: false})
                               }}> </i>
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea className="form-control"
                                  placeholder="Paragraph text"
                                  value={this.state.widget.text}
                                  onChange={(e) => {
                                      const newText = e.target.value;
                                      this.setState(prevState => ({
                                          widget: {
                                              ...prevState.widget,
                                              text: newText
                                          }
                                      }))
                                  }}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" type="text"
                               placeholder="Widget name"/>
                    </div>
                    <h3>Preview</h3>
                    <p>{this.state.widget.text}</p>
                </div>}
            </div>
        )
    }
}

export default ParagraphWidget