import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Login = () => {
    return (
        <>
            <Header />
            <Breadcrumbs
                FirstUrl="Home"
                FistName="Home"
                SecondUrl="Products"
                SecondName="Products"
                CurrentName="Login & Register"
            />
            <div className="login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="register-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>First Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Last Name"</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>E-mail</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="E-mail"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Mobile No</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Mobile No"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Retype Password</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>E-mail / Username</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="E-mail / Username"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="newaccount"
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="newaccount"
                                            >
                                                Keep me signed in
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Login;
