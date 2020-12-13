import React from "react";

const EventFilter = () => (
  <div className="card-body">
    <div className="col-md-4 pull-left">
      <div className="col-md-3 pull-left">
        <h4 className="head">From</h4>
      </div>
      <div className="col-md-9 pull-left no-padding">
        <div className="form-group">
          <div id="filterDate2">
            <div
              className="input-group date"
              data-date-format="dd.mm.yyyy"
            >
              <input
                type="text"
                className="form-control"
                placeholder="dd.mm.yyyy"
              />
              <div className="calendar-icon">
                <i className="icon-calendar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 pull-left">
      <div className="col-md-3 pull-left">
        <h4 className="head">To</h4>
      </div>
      <div className="col-md-9 pull-left no-padding">
        <div className="form-group">
          <div id="filterDate2">
            <div
              className="input-group date"
              data-date-format="dd.mm.yyyy"
            >
              <input
                type="text"
                className="form-control"
                placeholder="dd.mm.yyyy"
              />
              <div className="calendar-icon">
                <i className="icon-calendar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-2 pull-left">
      <a href="#" className="site-btn sb-gradients sbg-line min-wid-140">
        Apply
      </a>
    </div>
    <div className="col-md-2 pull-right">
      <a href="#" className="site-btn sb-gradients sbg-line min-wid-140">
        <i className="icon-cloud-upload upload" /> Export
      </a>
    </div>
  </div>
);

export default EventFilter;
