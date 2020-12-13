import React from "react";

const Url = ({ setMonitor }) => {
  return (
    <div className="add-url">
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-3 pull-left">
            <div className="card box-shd">
              <div className="card-body">
                <img src="img/01.png" alt="01" />
                <button
                  className="site-btn sb-gradients sbg-line"
                  onClick={() => setMonitor("visual")}
                >
                  Visual monitoring
                </button>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 pull-left">
            <div className="card box-shd">
              <div className="card-body">
                <img src="img/01.png" alt="01" />
                <button
                  className="site-btn sb-gradients sbg-line"
                  onClick={() => setMonitor("html-element")}
                >
                  HTML element monitoring
                </button>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 pull-left">
            <div className="card box-shd">
              <div className="card-body">
                <img src="img/01.png" alt="01" />
                <button
                  className="site-btn sb-gradients sbg-line"
                  onClick={() => setMonitor("keyword")}
                >
                  Keyword monitoring
                </button>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 pull-left">
            <div className="card box-shd">
              <div className="card-body">
                <img src="img/01.png" alt="01" />
                <button
                  className="site-btn sb-gradients sbg-line"
                  onClick={() => setMonitor("technology")}
                >
                  Technology monitoring
                </button>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-3 pull-left">
            <div className="card box-shd">
              <div className="card-body">
                <img src="img/01.png" alt="01" />
                <button
                  className="site-btn sb-gradients sbg-line"
                  onClick={() => setMonitor("html")}
                >
                  HTML monitoring
                </button>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 pull-left">
            <div className="card box-shd">
              <div className="card-body">
                <img src="img/01.png" alt="01" />
                <button
                  className="site-btn sb-gradients sbg-line"
                  onClick={() => setMonitor("content")}
                >
                  Content monitoring
                </button>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 pull-left">
            <div className="card box-shd">
              <div className="card-body">
                <img src="img/01.png" alt="01" />
                <button
                  className="site-btn sb-gradients sbg-line"
                  onClick={() => setMonitor("automatic")}
                >
                  Automatic Al monitoring
                </button>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 pull-left">
            <div className="card box-shd">
              <div className="card-body">
                <img src="img/01.png" alt="01" />
                <button
                  className="site-btn sb-gradients sbg-line"
                  onClick={() => setMonitor("availability")}
                >
                  Availability monitoring
                </button>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Url;
