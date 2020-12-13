import React from "react";
import Button from "react-bootstrap/Button";
const MonitorActivity = ({ monitorActivity, setMonitorActivity }) => {
  return (
    <div
      className="card"
      style={{ width: monitorActivity.width, height: monitorActivity.height }}
    >
      <div className="grad-box">
        <div className="pull-left">
          <h3>Monitoring Activity</h3>
        </div>
        <div className="pull-right">
          <div
            className="img-icon"
            onClick={(e) =>
              setMonitorActivity(
                {
                  ...monitorActivity,
                  width: monitorActivity.width === "98%" ? "48%" : "98%",
                },
              )}
          >
            <i className="fa fa-arrows-h"></i>
          </div>
        </div>
      </div>
      <div className="card-body">
        <p>Productive time saved ~ 0 hours</p>
        <p>Current Plan: Free</p>
        <p>Your allowance will renew in 28 days</p>
        <p>0 Active monitors</p>
        <div className="bg monitor">
          <div className="html"></div>
        </div>
        <p>0 URLs with changes</p>
        <div className="bg monitor">
          <div className="html"></div>
        </div>
        <br />
        <Button className="m-2" variant={"danger"}>
          Upgrade Plan
        </Button>
        <br />
        <Button className="m-2" variant={"danger"}>
          Need Check
        </Button>
      </div>
    </div>
  );
};
export default MonitorActivity;
