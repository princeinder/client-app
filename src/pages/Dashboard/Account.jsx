import React, { useEffect, useContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import AppContext from "../../context/AppContext";
import { useHistory } from "react-router-dom";
import Header from "../../layout/Dashboard/Header";
import Sidebar from "../../layout/Dashboard/Sidebar";
import Footer from "../../layout/Dashboard/Footer";
import AccountForm from "../../components/Account/AccountForm";

const Account = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [firstname, onChangeFirstname] = React.useState("");
  const [lastname, onChangeLastname] = React.useState("");
  const [phone, onChangePhone] = React.useState("");
  const [company, onChangeCompany] = React.useState("");
  const [title, onChangeTitle] = React.useState("");
  const [website, onChangeWebsite] = React.useState("");
  const [industry, onChangeIndustry] = React.useState("");
  const [country, onChangeCountry] = React.useState("");
  const { user, token } = useContext(AppContext);
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post(
        `/api/user/account/update`,
        {
          firstname,
          lastname,
          phone,
          website,
          company,
          title,
          industry,
          country,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((res) => {
        //const userdata = jwt_decode(res.data.token);
        //setUserData({ token: res.data.token, user: userdata });
        localStorage.setItem("auth-token", res.data.token);
        setSuccess({ message: res.data.message });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  };

  return (
    <div className="container-scroller">
      <Header user={user} />
      <div className="container-fluid page-body-wrapper">
        <Sidebar user={user} />
        <div className="main-panel">
          <div className="content-wrapper">
            <AccountForm
              loading={loading}
              success={success}
              user={user}
              onSubmitForm={onSubmitForm}
              onChangeFirstname={onChangeFirstname}
              onChangeLastname={onChangeLastname}
              onChangeTitle={onChangeTitle}
              onChangePhone={onChangePhone}
              onChangeCompany={onChangeCompany}
              onChangeIndustry={onChangeIndustry}
              onChangeCountry={onChangeCountry}
              onChangeWebsite={onChangeWebsite}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
