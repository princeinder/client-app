import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import moment from "moment";
import Filter from "../Utils/Filter";
const MonitorList = ({
  loading,
  success,
  onChangeSelect,
  onSearch,
  monitorData,
  onMonitorDelete,
  monitorList,
}) => {
  return (
    <div
      className="card"
      style={{ height: monitorList.height, width: monitorList.width }}
    >
      <div className="grad-box">
        <div className="pull-left">
          <h3>Monitor Urls</h3>
        </div>
        <div className="pull-right">
          <div className="img-icon">
            {/* <i class="fa fa-arrows-h"></i> */}
          </div>
        </div>
      </div>
      {loading
        ? (
          "loading"
        )
        : (
          <div className="card-body">
            <div className="filter mt-2">
              <Filter
                onChangeSelect={onChangeSelect}
                onSearch={onSearch}
              />
            </div>
            <div className="list mt-2 monitor-list">
              {success && (
                <Alert className="mt-2" variant="danger">
                  {success}
                </Alert>
              )}
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Page</th>
                    <th>Tool</th>
                    <th>Started</th>
                    <th>Frequency</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {monitorData.length < 0
                    ? monitorData.map((monitor) => (
                      <tr>
                        <td>{monitor.page}</td>
                        <td>{monitor.tool}</td>
                        <td>
                          {moment(
                            monitor.createdAt,
                          ).format("LLL")}
                        </td>
                        <td>
                          {monitor.frequency / 60 >= 24
                            ? monitor.frequency /
                                60 /
                                24 +
                              " Day"
                            : monitor.frequency / 60 +
                              " Hours"}
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={(e) =>
                              onMonitorDelete(
                                e,
                                monitor._id,
                              )}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))
                    : "No Records Found"}
                </tbody>
              </Table>
            </div>
          </div>
        )}
    </div>
  );
};

export default MonitorList;
