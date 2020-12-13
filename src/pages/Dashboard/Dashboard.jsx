import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import AppContext from "../../context/AppContext";
import { useHistory } from "react-router-dom";
import Header from "../../layout/Dashboard/Header";
import Sidebar from "../../layout/Dashboard/Sidebar";
import EventFeed from "../../components/Dashboard/EventFeed";
import MonitorActivity from "../../components/Dashboard/MonitorActivity";
import MonitorGraphUrl from "../../components/Dashboard/MonitorGraphUrl";
import MonitorGraphBreakdown from "../../components/Dashboard/MonitorGraphBreakdown";
import MonitorList from "../../components/Dashboard/MonitorList";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user, token, setUser } = useContext(AppContext);
  const [monitorData, setMonitorData] = useState([]);
  const [eventFeed, setEventFeed] = useState({ width: "48%", height: "500px" });
  const [monitorActivity, setMonitorActivity] = useState(
    { width: "48%", height: "500px" },
  );
  const [monitorGraphUrl, setMonitorGraphUrl] = useState(
    { width: "48%", height: "500px" },
  );
  const [monitorGraphBreakdown, setMonitorGraphBreakdown] = useState(
    { width: "48%", height: "500px" },
  );
  const [monitorList, setMonitorList] = useState(
    { width: "98%", height: "308px" },
  );
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/monitor/getmonitor`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setMonitorData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  }, [user]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/user/dashlayout/get`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  }, [user]);
  const onChangeSelect = () => {
  };
  const onSearch = (arg) => {
    setMonitorData((monitor) => {
      monitor.filter((mon) => mon.page.includes(arg));
    });
  };

  const onMonitorDelete = (e, _id) => {
    e.preventDefault();

    axios
      .delete(`/api/monitor/deletemonitor/${_id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setSuccess(res.data.message);
        setMonitorData((monitor) =>
          monitor.filter((mon) => mon._id !== res.data.data)
        );
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };

  return (
    <div className="container-scroller card-items-dashboard">
      <Header user={user} />
      <div className="page-body-wrapper">
        <Sidebar user={user} />
        <div className="main-panel">
          <div className="content-wrapper">
            <EventFeed eventFeed={eventFeed} setEventFeed={setEventFeed} />
            <MonitorActivity
              monitorActivity={monitorActivity}
              setMonitorActivity={setMonitorActivity}
            />
            <MonitorGraphUrl
              monitorGraphUrl={monitorGraphUrl}
              setMonitorGraphUrl={setMonitorGraphUrl}
            />
            <MonitorGraphBreakdown
              monitorGraphBreakdown={monitorGraphBreakdown}
              setMonitorGraphBreakdown={setMonitorGraphBreakdown}
            />
            <MonitorList
              monitorList={monitorList}
              setMonitorList={setMonitorList}
              loading={loading}
              success={success}
              onSearch={onSearch}
              monitorData={monitorData}
              onChangeSelect={onChangeSelect}
              onMonitorDelete={onMonitorDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
