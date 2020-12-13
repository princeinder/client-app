import React from "react";
import { Alert } from "react-bootstrap";
const AccountForm = ({
  user,
  loading,
  success,
  onSubmitForm,
  onChangeFirstname,
  onChangeLastname,
  onChangeTitle,
  onChangePhone,
  onChangeCompany,
  onChangeWebsite,
  onChangeIndustry,
  onChangeCountry,
}) => {
  return (
    <form onSubmit={onSubmitForm}>
      <div className="dash-profile">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="col-md-6 pull-left">
                <div className="row">
                  <div className="profile-circle">
                    <img
                      className="rounded-circle ml-2"
                      src="images/faces/face8.jpg"
                      alt="Profile img"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>First Name</label>
                        <input
                          required
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="First Name"
                          onChange={(e) =>
                            onChangeFirstname(
                              e.target.value,
                            )}
                          defaultValue={user.firstname}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Last Name</label>
                        <input
                          required
                          type="text"
                          name="lastname"
                          className="form-control"
                          placeholder="Last Name"
                          defaultValue={user.lastname}
                          onChange={(e) =>
                            onChangeLastname(
                              e.target.value,
                            )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Title</label>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          placeholder="Title"
                          defaultValue={user.title}
                          onChange={(e) =>
                            onChangeTitle(
                              e.target.value,
                            )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone Number"
                          defaultValue={user.phone}
                          onChange={(e) =>
                            onChangePhone(
                              e.target.value,
                            )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Company Name</label>
                        <input
                          type="text"
                          name="company"
                          className="form-control"
                          placeholder="Company Name"
                          defaultValue={user.company}
                          onChange={(e) =>
                            onChangeCompany(
                              e.target.value,
                            )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Website</label>
                        <input
                          type="text"
                          name="website"
                          className="form-control"
                          placeholder="Website"
                          defaultValue={user.website}
                          onChange={(e) =>
                            onChangeWebsite(
                              e.target.value,
                            )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      onChange={(e) => onChangeIndustry(e.target.value)}
                      name="industry"
                      defaultValue={user.industry}
                    >
                      <option value="">
                        Select Industry
                      </option>
                      <option value="entertainment">
                        Entertainment
                      </option>
                      <option value="government">
                        Government
                      </option>
                      <option value="healthcate">
                        Heath Care
                      </option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <select
                      name="country"
                      className="form-control"
                      id="exampleFormControlSelect1"
                      onChange={(e) => onChangeCountry(e.target.value)}
                      defaultValue={user.country}
                    >
                      <option value="">
                        Select Country
                      </option>
                      <option value="india">India</option>
                      <option value="us">
                        United States
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pull-left">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="m-t-30">
                      Payment Method
                    </h2>
                    <div className="form-group">
                      <div className="input-group">
                        <label>Cardholder’s Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Cardholder’s Name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="input-group">
                        <label>
                          Credit/Debit Card Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Expiration</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="MM/YY"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Security Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="CVV/CVC"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h2>Your Promo Code</h2>
                    <div className="form-group">
                      <div className="input-group">
                        <label>Enter Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Cardholder’s Name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h2>
                      List of properties shared with me:
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h2>Nothing to show</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="pull-right m-t-160 m-b-30 profile-btn">
                      <button className="site-btn sb-gradients sbg-line">
                        Delete My Account
                      </button>
                      <button
                        type="submit"
                        className="site-btn sb-gradients sbg-line"
                        disabled={loading ? true : false}
                      >
                        {loading ? "Saving.." : "Save"}
                      </button>
                      {success.message && (
                        <Alert
                          className="mt-2"
                          variant="danger"
                        >
                          {success.message}
                        </Alert>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AccountForm;
