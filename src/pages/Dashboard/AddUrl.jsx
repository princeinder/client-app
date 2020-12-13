import React, { useEffect, useContext } from "react";
import axios from "axios";
import AppContext from "../../context/AppContext";
import { useHistory } from "react-router-dom";
import Header from "../../layout/Dashboard/Header";
import Sidebar from "../../layout/Dashboard/Sidebar";
import MonitorInput from "../../components/AddUrl/MonitorInput";
import Url from "../../components/AddUrl/Url";
import MonitorOutput from "../../components/AddUrl/MonitorOutput";

const AddUrl = () => {
  const { user, token } = useContext(AppContext);
  const [url, setUrl] = React.useState("");
  const [monitor, setMonitor] = React.useState("");
  const [frequency, setFrequency] = React.useState("");
  const [screenshot, setScreenshot] = React.useState("");
  const [html, setHtml] = React.useState("");
  const [keywords, setKeywords] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const [crop, setCrop] = React.useState({ aspect: 4 / 3 });
  const history = useHistory();

  const onSubmitMonitor = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post(
        `/api/monitor/addmonitor`,
        { page: url, tool: monitor, frequency },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((res) => {
        setLoading(false);
        setSuccess(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.page);
      });
  };
  const onSubmitUrl = (event) => {
    event.preventDefault();
    setLoading(true);
    if (monitor === "visual") {
      axios
        .post(
          `/api/url/visual`,
          { url },
          {
            headers: {
              Authorization: token,
            },
          },
        )
        .then((res) => {
          setHtml("");
          console.log(res.data.visual);
          setScreenshot(res.data.visual);
          setLoading(false);
        })
        .catch((err) => {
          setError("Invalid Url");
          setLoading(false);
        });
    }
    if (monitor === "html") {
      axios
        .post(
          `/api/url/html`,
          { url },
          {
            headers: {
              Authorization: token,
            },
          },
        )
        .then((res) => {
          setScreenshot("");
          setHtml(res.data.html);
          setLoading(false);
        })
        .catch((err) => {
          setError("Invalid Url");
          setLoading(false);
        });
    }
    if (monitor === "keyword") {
      axios
        .post(
          `/api/url/getkeywords`,
          { url },
          {
            headers: {
              Authorization: token,
            },
          },
        )
        .then((res) => {
          setScreenshot("");
          setHtml("");
          setKeywords(res.data.keywords);
          setLoading(false);
        })
        .catch((err) => {
          setError("Invalid Url");
        });
    }
  };
  return (
    <div className="container-scroller">
      <Header user={user} />
      <div className="container-fluid page-body-wrapper">
        <Sidebar user={user} />
        <div className="main-panel">
          <div className="content-wrapper">
            {monitor
              ? (
                <MonitorInput
                  monitor={monitor}
                  url={url}
                  frequency={frequency}
                  setFrequency={setFrequency}
                  setMonitor={setMonitor}
                  setUrl={setUrl}
                  error={error}
                  success={success}
                  onSubmitUrl={onSubmitUrl}
                  onSubmitMonitor={onSubmitMonitor}
                />
              )
              : (
                <Url setMonitor={setMonitor} />
              )}
            {loading
              ? (
                "Please wait..."
              )
              : (
                <MonitorOutput
                  screenshot={screenshot}
                  crop={crop}
                  setCrop={setCrop}
                  keywords={keywords}
                  html={html}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUrl;
