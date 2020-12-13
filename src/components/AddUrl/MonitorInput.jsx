import React from "react";
import { Alert } from "react-bootstrap";

const MonitorInput = ({
  url,
  setUrl,
  monitor,
  setMonitor,
  setFrequency,
  success,
  error,
  onSubmitUrl,
  onSubmitMonitor,
}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card box-shd">
          <div className="card-body">
            <div className="btn-full">
              <div className="col-md-12">
                <select
                  className="form-control"
                  id="monitor-type"
                  onChange={(e) => setMonitor(e.target.value)}
                  defaultValue={monitor}
                >
                  <option value="visual">
                    Visual monitoring
                  </option>
                  <option>HTML element monitoring</option>
                  <option value="keyword">
                    Keyword monitoring
                  </option>
                  <option>Technology monitoring</option>
                  <option value="html">HTML monitoring</option>
                  <option>Content monitoring</option>
                  <option>Automatic Al monitoring</option>
                  <option>Availability monitoring</option>
                </select>
              </div>
            </div>
            <div className="monitor-form">
              <div className="col-md-12">
                <form onSubmit={onSubmitUrl}>
                  <div className="pull-left mt-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="URL"
                      onChange={(e) => setUrl(e.target.value)}
                      required
                    />
                    {error && (
                      <Alert
                        className="mt-2"
                        variant="danger"
                      >
                        {error}
                      </Alert>
                    )}
                  </div>
                  <div className="pull-left ml-2">
                    <button
                      className="site-btn sb-gradients sbg-line"
                      type="submit"
                    >
                      Preview
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-12">
                <form onSubmit={onSubmitMonitor}>
                  <div className="pull-left mt-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      defaultValue={url}
                      required
                    />
                    {error && (
                      <Alert
                        className="mt-2"
                        variant="danger"
                      >
                        {error}
                      </Alert>
                    )}
                    {success && (
                      <Alert
                        className="mt-2"
                        variant="danger"
                      >
                        {success}
                      </Alert>
                    )}
                  </div>
                  <div className="pull-left ml-2 mt-2">
                    <select
                      className="form-control"
                      id="change"
                    >
                      <option value="5">{">=5%"}</option>
                      <option value="10">{">=10%"}</option>
                      <option value="15">{">=15%"}</option>
                      <option value="20">{">=20%"}</option>
                    </select>
                  </div>
                  <div className="pull-left ml-2 mt-2">
                    <select
                      className="form-control"
                      id="monitorFrequency"
                      onChange={(e) => setFrequency(e.target.value)}
                      required
                    >
                      <option value="">
                        Select Frequency
                      </option>
                      <option value="720">
                        12 Hours
                      </option>
                      <option value="1440">1 Day</option>
                      <option value="2880">2 Day</option>
                    </select>
                  </div>
                  <div className=" pull-left ml-2">
                    <button
                      className="site-btn sb-gradients sbg-line"
                      type="submit"
                    >
                      Start monitoring
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-12 ">
                <div className="col-md-7 pull-left pl0 my-4 monitor-list">
                  <h5>Select Notification Channels</h5>
                  <ul class="form-inline">
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Email
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Slack
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Telegram
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        zapier
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="col-md-5 pull-left my-4 monitor-list1">
                  <h5>Custom Schedule</h5>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Pause monitoring after the first event deteced
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="monitor-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorInput;
