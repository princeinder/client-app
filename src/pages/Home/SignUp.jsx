import React, { useContext, useReducer } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { Alert } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import jwt_decode from "jwt-decode";

import {
  facebook_app_id,
  google_client_id,
} from "../../environment/environment";
import { accountReducer, accountState } from "../../reducers/accountReducer";
import { GET_ERRORS, LOADING, ACCOUNT_SIGNUP } from "../../types/index";

const SignUp = () => {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [c_password, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState({});
  const history = useHistory();
  const { user, token, setUser, setToken } = useContext(AppContext);
  const [account, dispatch] = useReducer(accountReducer, accountState);
  const socialLogin = (req) => {
    dispatch({ type: LOADING });
    axios
      .post(`/api/account/socialsignin`, req)
      .then((res) => {
        const userdata = jwt_decode(res.data.token);
        setUser(userdata);
        setToken(res.data.token);
        localStorage.setItem("auth-token", res.data.token);
        history.push("/dashboard");
      })
      .catch((err) => {
        dispatch({ type: GET_ERRORS, payload: err.response.data });
      });
  };

  const responseFacebook = (response) => {
    const { first_name, last_name, email, id } = response;
    const req = {
      firstname: first_name,
      lastname: last_name,
      email,
      providerId: id,
    };
    socialLogin(req);
  };

  const responseGoogleSuccess = (response) => {
    console.log(response);
    const { givenName, familyName, email, googleId } = response.profileObj;
    const req = {
      firstname: givenName,
      lastname: familyName,
      email,
      providerId: googleId,
    };
    socialLogin(req);
  };
  const responseGoogleFailure = (response) => {
    setError({ message: "something went wrong" });
  };

  const onSubmitForm = (e) => {
    dispatch({ type: LOADING });
    e.preventDefault();
    var req = { firstname, lastname, email, password };
    axios
      .post(`/api/account/signup`, req)
      .then((res) => {
        dispatch({ type: ACCOUNT_SIGNUP, payload: res.data });
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: GET_ERRORS, payload: err.response.data });
      });
  };
  return (
    <section className="signup-login text-center">
      <div className="container">
        <div className="col-lg-6 offset-lg-3">
          <div className="card border-0 px-4 py-5">
            <div className="row mb-4 px-3">
              <div className="logo auto"><img src="img/logo-01.png" /></div>
            </div>
            <div className="row mb-4 px-3">
              <div className="auto">
                <h6 className="mb-0 mr-4 mt-2 pull-left">Sign in with</h6>
                <FacebookLogin
                  appId={facebook_app_id}
                  fields="first_name,last_name,email"
                  callback={responseFacebook}
                  textButton=""
                  icon="fa-facebook"
                  cssClass="facebook text-center mr-3"
                  render={(renderProps) => (
                    <div className="facebook text-center mr-3">
                      <div
                        className="fa fa-facebook"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      />
                    </div>
                  )}
                />
                <GoogleLogin
                  clientId={google_client_id}
                  render={(renderProps) => (
                    <div
                      className="google mr-3 pull-left"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <div className="fa fa-google" />
                    </div>
                  )}
                  onSuccess={responseGoogleSuccess}
                  onFailure={responseGoogleFailure}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
            <div className="row px-3 mb-4">
              <div className="line " />
              <small className="or auto">Or</small>
              <div className="line" />
            </div>
            <form className="signin" onSubmit={onSubmitForm}>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">
                    First Name
                  </h6>
                </label>
                <input
                  className="mb-4"
                  type="text"
                  name="firstname"
                  placeholder="Enter Firstname "
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                {account.error.firstname && (
                  <Alert
                    className="mt-2"
                    variant="danger"
                  >
                    {account.error.firstname}
                  </Alert>
                )}
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">
                    Last Name
                  </h6>
                </label>
                <input
                  className="mb-4"
                  type="text"
                  name="lastname"
                  placeholder="Enter LastName "
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                {account.error.lastname && (
                  <Alert
                    className="mt-2"
                    variant="danger"
                  >
                    {account.error.lastname}
                  </Alert>
                )}
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">
                    Email Address
                  </h6>
                </label>
                <input
                  className="mb-4"
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter a valid email address"
                  required
                />
                {account.error.email && (
                  <Alert
                    className="mt-2"
                    variant="danger"
                  >
                    {account.error.email}
                  </Alert>
                )}
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">
                    Password
                  </h6>
                </label>
                <input
                  className="mb-4"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
                {account.error.password && (
                  <Alert
                    className="mt-2"
                    variant="danger"
                  >
                    {account.error.password}
                  </Alert>
                )}
              </div>

              <div className="row mb-3 px-3">
                <button
                  type="submit"
                  className="site-btn auto"
                >
                  {account.loading ? "Please Wait" : "Sign Up"}
                </button>
              </div>
            </form>
            {account.success.message && (
              <div className="row mb-3 px-3">
                <Alert
                  className="mt-2"
                  variant="success"
                >
                  {account.success.message}
                </Alert>
              </div>
            )}
            <div className="row mb-4 px-3">
              <small className="font-weight-bold auto">
                Have an account ?
                <a
                  href="/signin"
                  className="text-danger"
                >
                  {" Login"}
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
