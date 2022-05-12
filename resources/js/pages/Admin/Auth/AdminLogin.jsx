import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { admin_login } from "../../../Redux/Actions/Admin/Admin.Actions";

const AdminLogin = () => {
    const url = process.env.MIX_APP_URL || "";

    const { Admin } = useSelector((state) => state.ADMIN_LOGIN);
    const token = Admin?.token;
    let any_dir = process.env.MIX_SUB_DIR || "";
    const [LoginEmail, setLoginEmail] = React.useState();
    const [LoginPassword, setLoginPassword] = React.useState();
    const [isSubmit, setIsSubmit] = React.useState(false);
    const dispatch = useDispatch();
    const history = useHistory();


    const auth = () => {
        if (token) {
            history.push("/" + any_dir + "admin/Dashboard");
        }
    };

    const SubmitLogin = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        const postData = new FormData();
        postData.append("email", LoginEmail);
        postData.append("password", LoginPassword);
        dispatch(admin_login(postData, history)).then(() => {
            setIsSubmit(false);
        });
    };


    React.useEffect(() => {
        auth();
    }, [isSubmit, token]);

    return (
        <>
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                <div className="brand-logo">
                                    <img
                                        src={
                                            url +
                                            "public/AdminAssets/images/logo.svg"
                                        }
                                        alt="logo"
                                    />
                                </div>
                                <h4>Hello! let's get started</h4>
                                <h6 className="font-weight-light">
                                    Sign in to continue.
                                </h6>
                                <form className="pt-3">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            id="exampleInputEmail1"
                                            placeholder="Enter Email"
                                            onChange={(e) =>
                                                setLoginEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setLoginPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <button type="button"
                                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                          onClick={SubmitLogin}
                                        >
                                            SIGN IN
                                      </button>
                                    </div>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <label className="form-check-label text-muted">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                                Keep me signed in
                                            </label>
                                        </div>
                                        <a
                                            href="#"
                                            className="auth-link text-black"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="mb-2">
                                        <button
                                            type="button"
                                            className="btn btn-block btn-facebook auth-form-btn"
                                        >
                                            <i className="ti-facebook me-2"></i>
                                            Connect using facebook
                                        </button>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light">
                                        Don't have an account?{" "}
                                        <a
                                            href="register.html"
                                            className="text-primary"
                                        >
                                            Create
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;
