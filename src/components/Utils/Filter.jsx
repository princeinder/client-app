import React from "react";

const Filter = ({ onChangeSelect, onSearch }) => {
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="form-group">
                    <div className="input-group">
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            onChange={(e) => onChangeSelect(e.target.value)}
                        >
                            <option value="visual">Visual monitoring</option>
                            <option>HTML element monitoring</option>
                            <option value="keyword">Keyword monitoring</option>
                            <option>Technology monitoring</option>
                            <option value="html">HTML monitoring</option>
                            <option>Content monitoring</option>
                            <option>Automatic Al monitoring</option>
                            <option>Availability monitoring</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                    <div className="input-group">
                        <select
                            required
                            type="text"
                            name="firstname"
                            className="form-control"
                            placeholder="First Name"
                        >
                            <option value="all">All</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            //   onChange={(e) => onSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
