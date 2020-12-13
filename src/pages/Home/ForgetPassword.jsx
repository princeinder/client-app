import React, { useReducer, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { Alert } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import { accountReducer, accountState } from "../../reducers/accountReducer";
import { GET_ERRORS, LOADING } from "../../types/index";
const ForgetPassword = () => {
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  //  const [error, setError] = React.useState({});
  const history = useHistory();
  const { setToken, setUser } = useContext(AppContext);
  const [account, dispatch] = useReducer(accountReducer, accountState);

  const onSubmitForm = (e) => {
    dispatch({ type: LOADING });
    e.preventDefault();
    //  var req = { email, password };
    axios
      .post(`/api/account/signin`, {})
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
                <h6 className="mb-0 mr-4 mt-2 pull-left">Forget Password</h6>
              </div>
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
                  //   onChange={(e) => setEmail(e.target.value)}
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

              <div className="row mb-3 px-3 auto">
                <button
                  type="submit"
                  className="site-btn auto"
                >
                  {account.loading ? "Please wait..." : "Submit"}
                </button>
              </div>
            </form>
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

export default ForgetPassword;
