import React, { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import { useHistory } from "react-router-dom";
import Header from "../../layout/Dashboard/Header";
import Sidebar from "../../layout/Dashboard/Sidebar";
import Footer from "../../layout/Dashboard/Footer";
const Setting = () => {
  const { user, token } = useContext(AppContext);
  const history = useHistory();

  return (
    <div className="container-scroller">
      <Header user={user} />
      <div className="container-fluid page-body-wrapper">
        <Sidebar user={user} />
        <div className="main-panel setting">
          <div className="content-wrapper">
            <div className="col-md-12">
              <div
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="card">
                  <div
                    className="card-header"
                    role="tab"
                    id="headingOne"
                  >
                    <div className="mb-0">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        className="collapsed"
                      >
                        <h3>
                          <i className="icon-tag" />
                          Property Tags
                        </h3>
                      </a>
                      <i
                        className="icon-arrow-down"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                    aria-expanded="false"
                    style={{}}
                  >
                    <div className="card-block">
                      <div className="card">
                        <div className="card-body">
                          <div className="col-md-5 pull-left">
                            <div className="col-md-3 pull-left no-padding">
                              <h4 className="head">
                                Tag Name
                              </h4>
                            </div>
                            <div className="col-md-9 pull-left no-padding">
                              <div className="form-group">
                                <div id="filterDate2">
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Type tag Name"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5 pull-left">
                            <div className="col-md-3 pull-left no-padding">
                              <h4 className="head">
                                Tag Color
                              </h4>
                            </div>
                            <div className="col-md-9 pull-left no-padding">
                              <div className="form-group">
                                <div id="filterDate2">
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="#3456789"
                                    />
                                    <div className="color-box" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 pull-left">
                            <button
                              className="site-btn sb-gradients sbg-line min-wid-140"
                            >
                              Add
                            </button>
                          </div>
                          <p className="tag">
                            List of Tags: Nothing to Show
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    role="tab"
                    id="headingTwo"
                  >
                    <div className="mb-0">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        className="collapsed"
                      >
                        <h3>
                          <i className="icon-envelope" />
                          E-Mail Notification
                        </h3>
                      </a>
                      <i
                        className="icon-arrow-down"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                    aria-expanded="false"
                  >
                    <div className="card-block">
                      <div className="card">
                        <div className="card-body">
                          <div className="col-md-6 pull-left">
                            <div className="col-md-4 pull-left no-padding">
                              <h4 className="head">
                                Required Email
                              </h4>
                            </div>
                            <div className="col-md-8 pull-left no-padding">
                              <div className="form-group">
                                <div id="filterDate2">
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Email Address here"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 pull-left">
                            <div className="col-md-4 pull-left no-padding">
                              <h4 className="head">
                                Opional Email
                              </h4>
                            </div>
                            <div className="col-md-8 pull-left no-padding">
                              <div className="form-group">
                                <div id="filterDate2">
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Email Address here"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 ">
                            <div
                              className="col-md-8 pull-left no-padding m-t-40"
                            >
                              <div className="col-md-3 pull-left no-padding">
                                <div className="form-check pull-left">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios1"
                                    defaultValue="option1"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="exampleRadios1"
                                  >
                                    Enable
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-3 pull-left no-padding">
                                <div className="form-check pull-left">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios2"
                                    defaultValue="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="exampleRadios2"
                                  >
                                    Disable
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-12 pull-left m-t-10">
                                <p>
                                  After checking "Disabled" you are not going to
                                  receive email notifications anymore.
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4 pull-left email">
                              <a
                                href="#"
                                className="site-btn sb-gradients sbg-line min-wid-140"
                              >
                                Save
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    role="tab"
                    id="headingThree"
                  >
                    <div className="mb-0">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        className="collapsed"
                      >
                        <h3>
                          <i className="icon-globe" />
                          Integrations
                        </h3>
                      </a>
                      <i
                        className="icon-arrow-down"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                    aria-expanded="false"
                  >
                    <div className="card-block integration">
                      <div className="card-body">
                        <div className="col-md-12 pull-left">
                          <div className="col-md-6 pull-left m-b-40">
                            <div className="col-md-4 pull-left">
                              <img src="img/001.png" />
                            </div>
                            <div className="col-md-4 pull-left m-t-10">
                              <h4>Telegram</h4>
                            </div>
                            <div className="col-md-4 pull-left ">
                              <a
                                href="#"
                                className="site-btn sb-gradients sbg-line min-wid-140"
                              >
                                Connect
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 pull-right m-b-40">
                            <div className="col-md-4 pull-left">
                              <img src="img/003.png" />
                            </div>
                            <div className="col-md-4 pull-left m-t-10">
                              <h4>Zapier</h4>
                            </div>
                            <div className="col-md-4 pull-left">
                              <a
                                href="#"
                                className="site-btn sb-gradients sbg-line min-wid-140"
                              >
                                Connect
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 pull-left m-b-40">
                          <div className="col-md-6 pull-left">
                            <div className="col-md-4 pull-left">
                              <img src="img/002.png" />
                            </div>
                            <div className="col-md-4 pull-left m-t-10">
                              <h4>Slack</h4>
                            </div>
                            <div className="col-md-4 pull-left">
                              <a
                                href="#"
                                className="site-btn sb-gradients sbg-line min-wid-140"
                              >
                                Connect
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 pull-right m-b-40">
                            <div className="col-md-4 pull-left m-t-10">
                              <img src="img/004.png" />
                            </div>
                            <div className="col-md-4 pull-left m-t-10">
                              <h4>Pabbly</h4>
                            </div>
                            <div className="col-md-4 pull-left">
                              <a
                                href="#"
                                className="site-btn sb-gradients sbg-line min-wid-140"
                              >
                                Connect
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    role="tab"
                    id="headingOne"
                  >
                    <div className="mb-0">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        className="collapsed"
                      >
                        <h3>
                          <i className="icon-anchor" />
                          Webhooks
                        </h3>
                      </a>
                      <i
                        className="icon-arrow-down"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                    aria-expanded="false"
                    style={{}}
                  >
                    <div className="card-block">
                      <div className="card">
                        <div className="card-body">
                          <div className="col-md-12 pull-left">
                            <div className="col-md-6 pull-left">
                              <div className="col-md-4 pull-left no-padding">
                                <h4 className="head">
                                  API Key
                                </h4>
                              </div>
                              <div className="col-md-8 pull-left no-padding">
                                <div className="form-group">
                                  <div id="filterDate2">
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="API Key"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 pull-left">
                              <div className="col-md-4 pull-left no-padding">
                                <h4 className="head">
                                  Webhook
                                </h4>
                              </div>
                              <div className="col-md-8 pull-left no-padding">
                                <div className="form-group">
                                  <div id="filterDate2">
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email Address here"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 pull-left m-b-40 m-t-40">
                            <div className="col-md-6 pull-left">
                              <a
                                href="#"
                                className="site-btn sb-gradients sbg-line min-wid-140 "
                              >
                                Save
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    role="tab"
                    id="headingTwo"
                  >
                    <div className="mb-0">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        className="collapsed"
                      >
                        <h3>
                          <i className="icon-bag" />
                          Current Hexowatch Plan Information
                        </h3>
                      </a>
                      <i
                        className="icon-arrow-down"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                    aria-expanded="false"
                  >
                    <div className="card-block">
                      <div className="card">
                        <div className="card-body">
                          <div className="col-md-12 pull-left">
                            <ul>
                              <li>
                                Plan Name: Free
                              </li>
                              <li>
                                Period: Forever Free
                              </li>
                              <li>
                                Checks per month: 75 out of 75
                              </li>
                              <li>
                                Max. checks frequency: 12 hours
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-12 pull-left m-b-40 m-t-40">
                            <a
                              href="#"
                              className="site-btn sb-gradients sbg-line min-wid-140"
                            >
                              Upgrade Plans
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header"
                    role="tab"
                    id="headingThree"
                  >
                    <div className="mb-0">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        className="collapsed"
                      >
                        <h3>
                          <i className="icon-support" />
                          Default Settings
                        </h3>
                      </a>
                      <i
                        className="icon-arrow-down"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                    aria-expanded="false"
                  >
                    <div className="card-block">
                      <div className="card">
                        <div className="card-body">
                          <div className="col-md-12 pull-left">
                            <p>
                              After checking "Disabled" you are not going to
                              receive email notifications anymore.
                            </p>
                          </div>
                          <div className="col-md-12 pull-left">
                            <div className="col-md-3 pull-left no-padding">
                              <div className="form-check pull-left">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios1"
                                  defaultValue="option1"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios1"
                                >
                                  Enable
                                </label>
                              </div>
                            </div>
                            <div className="col-md-3 pull-left no-padding">
                              <div className="form-check pull-left">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios2"
                                  defaultValue="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios2"
                                >
                                  Disable
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 pull-left m-t-10">
                            <a
                              href="#"
                              className="site-btn sb-gradients sbg-line min-wid-140"
                            >
                              Save
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
