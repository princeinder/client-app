import React, { useContext } from "react";
import TopNavigation from "../../components/Home/TopNavigation";
import AppContext from "../../context/AppContext";

const Header = () => {
  const { token } = useContext(AppContext);

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TopNavigation token={token} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
