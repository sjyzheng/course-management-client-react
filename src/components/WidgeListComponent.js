import React from "react";

const WidgetListComponent = () => (
    <div>
        <ul className="nav nav-pills justify-content-end mt-2">
            <li className="nav-item">
                <a className="nav-link active bg-success mx-1" href="#">Save</a>
            </li>
            <li className="nav-item custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                    <label className="custom-control-label m-2" htmlFor="customSwitch1">Preview</label>
            </li>
        </ul>

        <div className="border m-3 p-2 rounded">
            <div className="form-row d-flex justify-content-between">
                <div className="col">
                    <h2>Heading Widget</h2>
                </div>
                <div className="col-lg-4 col-md-6 float-right">
                    <i className="fas fa-arrow-circle-up fa-2x mr-1"> </i>
                    <i className="fas fa-arrow-circle-down fa-2x mr-1"> </i>
                    <select className="custom-select mb-3 col-5 mr-1" defaultValue="0">
                        <option value="0">Heading</option>
                        <option value="1">Paragraph</option>
                        <option value="2">List</option>
                        <option value="3">Image</option>
                    </select>
                    <i className="fas fa-times-circle fa-2x"> </i>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1"> </label>
                <input id="exampleFormControlInput1" className="form-control" type="text"
                       placeholder="Heading text"/>
            </div>

            <div className="form-group">
                <select className="custom-select">
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                </select>
            </div>

            <div className="form-group">
                <input className="form-control" type="text"
                       placeholder="Widget name"/>
            </div>
            <h3>Preview</h3>
            <h1>Heading text</h1>
        </div>
        <i className="fas fa-plus-circle fa-2x float-right mr-2 wbdv-button wbdv-add-course"> </i>
    </div>
)

export default WidgetListComponent