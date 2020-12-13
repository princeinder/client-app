import React from "react";
import { Bar, Line } from "react-chartjs-2";
import Button from "react-bootstrap/Button";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventFeed = ({ eventFeed, setEventFeed }) => {
  const [graph, setGraph] = React.useState("bar");
  const [startDate, setStartDate] = React.useState("bar");

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "Visual Monitoring",
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        borderWidth: 1,
        hoverBackgroundColor: "#FF6384",
        hoverBorderColor: "#FF6384",
        data: [3, 2.4, 1.4, 3.4, 0.8, 7.9, 9.2],
      },
      {
        label: "Keyword Monitoring",
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
        borderWidth: 1,
        hoverBackgroundColor: "#36A2EB",
        hoverBorderColor: "#36A2EB",
        data: [4, 3.4, 2.4, 4.4, 1.8, 8.9, 9.4],
      },
      {
        label: "Html Monitoring",
        backgroundColor: "#FFCE56",
        borderColor: "#FFCE56",
        borderWidth: 1,
        hoverBackgroundColor: "#FFCE56",
        hoverBorderColor: "#FFCE56",
        data: [5, 4.4, 2.4, 5.4, 2.8, 9, 9.6],
      },
    ],
  };

  return (
    <div
      className="card"
      style={{ width: eventFeed.width, height: eventFeed.height }}
    >
      <div className="grad-box">
        <div className="pull-left">
          <h3>Event Feed</h3>
        </div>
        <div className="pull-right">
          <div
            className="img-icon"
            onClick={(e) =>
              setEventFeed(
                {
                  ...eventFeed,
                  width: eventFeed.width === "98%" ? "48%" : "98%",
                },
              )}
          >
            <i className="fa fa-arrows-h"></i>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          {/* <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    /> */}
        </div>
        <div className="row">
          <Button
            className="m-2"
            onClick={() => setGraph("bar")}
            variant={graph === "bar" ? "danger" : "light"}
          >
            Bar Chart
          </Button>

          <Button
            className="m-2"
            onClick={() => setGraph("chart")}
            variant={graph === "chart" ? "danger" : "light"}
          >
            Line Chart
          </Button>
        </div>
        <div className="graph">
          {graph === "bar"
            ? (
              <Bar
                data={data}
                width={100}
                height={315}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            )
            : (
              <Line
                data={data}
                width={100}
                height={315}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default EventFeed;
