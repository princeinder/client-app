import React, { useReducer, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { Alert } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import {
  facebook_app_id,
  google_client_id,
} from "../../environment/environment";
import { accountReducer, accountState } from "../../reducers/accountReducer";
import { GET_ERRORS, LOADING } from "../../types/index";
const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({});
  const history = useHistory();
  const { setToken, setUser } = useContext(AppContext);
  const [account, dispatch] = useReducer(accountReducer, accountState);

  const socialLogin = (req) => {
    dispatch({ type: LOADING });
    axios
      .post(`/api/account/socialsignin`, req)
      .then((res) => {
        const user = jwt_decode(res.data.token);
        setUser(user);
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
    var req = { email, password };
    axios
      .post(`/api/account/signin`, req)
      .then((res) => {
        const user = jwt_decode(res.data.token);
        setUser(user);
        setToken(res.data.token);
        localStorage.setItem("auth-token", res.data.token);
        history.push("/dashboard");
      })
      .catch((err) => {
        dispatch({ type: GET_ERRORS, payload: err.response.data });
      });
  };
  return (
    <section className="signup-login text-center">
      <div className="container">
        <div className="col-lg-6 offset-lg-3">
          <div className="card border-0 px-4 py-5">
            <div className="row mb-4 px-3">
              <div className="logo auto">
                <a href="/">
                  <img src="img/logo-01.png" />
                </a>
              </div>
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
                  <h6 className="mb-0 text-sm">Email Address</h6>
                </label>
                <input
                  className="mb-4"
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter a valid email address"
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
                  <h6 className="mb-0 text-sm">Password</h6>
                </label>
                <input
                  type="password"
                  name="password"
                  className="mb-4"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
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
              <div className="row px-3 mb-4">
                <div
                  className="custom-control custom-checkbox custom-control-inline"
                >
                  <input
                    id="chk1"
                    type="checkbox"
                    name="chk"
                    className="custom-control-input"
                  />
                  <label
                    htmlFor="chk1"
                    className="custom-control-label text-sm"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="/forgetpassword"
                  className="ml-auto mb-0 text-sm"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="row mb-3 px-3 auto">
                <button
                  type="submit"
                  className="site-btn auto"
                >
                  {account.loading ? "Please wait..." : "Login"}
                </button>
              </div>
            </form>
            <div className="row mb-4 px-3 auto">
              <small className="font-weight-bold auto">
                Don't have an account ?
                <a
                  href="/signup"
                  className="text-danger"
                >
                  {" Register"}
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
