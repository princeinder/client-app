import React from "react";
import { Doughnut } from "react-chartjs-2";
const data = {
  labels: ["Active", "Pause"],
  datasets: [
    {
      label: "# of Active",
      data: [300, 50],
      backgroundColor: ["#FF6384", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#FFCE56"],
    },
  ],
};

const MonitorGraphUrl = ({ monitorGraphUrl, setMonitorGraphUrl }) => {
  return (
    <div
      className="card"
      style={{ width: monitorGraphUrl.width, height: monitorGraphUrl.height }}
    >
      <div className="grad-box">
        <div className="pull-left">
          <h3>Total URL</h3>
        </div>
        <div className="pull-right">
          <a
            className="img-icon"
            onClick={(e) =>
              setMonitorGraphUrl(
                {
                  ...monitorGraphUrl,
                  width: monitorGraphUrl.width === "98%" ? "48%" : "98%",
                },
              )}
          >
            <i className="fa fa-arrows-h"></i>
          </a>
        </div>
      </div>
      <div className="card-body ">
        <Doughnut
          data={data}
          width={100}
          height={215}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};
export default MonitorGraphUrl;
