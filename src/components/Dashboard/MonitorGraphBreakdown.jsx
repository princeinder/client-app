import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Visual Monitoring", "HTML Monitoring"],
  datasets: [
    {
      data: [300, 100],
      backgroundColor: ["#FF6384", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#FFCE56"],
    },
  ],
};

const MonitorGraphBreakdown = (
  { monitorGraphBreakdown, setMonitorGraphBreakdown },
) => {
  return (
    <div
      className="card"
      style={{
        width: monitorGraphBreakdown.width,
        height: monitorGraphBreakdown.height,
      }}
    >
      <div className="grad-box">
        <div className="pull-left">
          <h3>Total Breakdown</h3>
        </div>
        <div className="pull-right">
          <div
            className="img-icon"
            onClick={(e) =>
              setMonitorGraphBreakdown(
                {
                  ...monitorGraphBreakdown,
                  width: monitorGraphBreakdown.width === "98%" ? "48%" : "98%",
                },
              )}
          >
            <i className="fa fa-arrows-h"></i>
          </div>
        </div>
      </div>
      <div className="card-body b-r-10">
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
export default MonitorGraphBreakdown;
