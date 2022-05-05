import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    user_login,
    registerAction,
} from "../../../Redux/Actions/User.Actions";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Login = () => {
    const { REGISTERED_VALIDATION } = useSelector(
        (state) => state.REGISTER_USER
    );
    const { User } = useSelector((state) => state.USER_LOGIN);
    const token = User?.token;
    let any_dir = process.env.MIX_SUB_DIR || "";
    const [LoginEmail, setLoginEmail] = React.useState();
    const [LoginPassword, setLoginPassword] = React.useState();

    const [isSubmit, setIsSubmit] = React.useState(false);
    const [isRegisterSubmit, setIsRegisterSubmit] = React.useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const [RegisterFname, setRegisterFname] = React.useState("");
    const [RegisterLname, setRegisterLname] = React.useState("");
    const [RegisterMobileNo, setRegisterMobileNo] = React.useState("");
    const [RegisterEmail, setRegisterEmail] = React.useState("");
    const [RegisterPassword, setRegisterPassword] = React.useState("");

    const auth = () => {
        if (token) {
            history.push("/" + any_dir);
        }
    };

    const SubmitLogin = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        const postData = new FormData();
        postData.append("email", LoginEmail);
        postData.append("password", LoginPassword);
        dispatch(user_login(postData, history)).then(() => {
            setIsSubmit(false);
        });
    };

    const SubmitRegister = (e) => {
        e.preventDefault();
        setIsRegisterSubmit(true);
        const postData = new FormData();
        postData.append("first_name", RegisterFname);
        postData.append("last_name", RegisterLname);
        postData.append("mobile_no", RegisterMobileNo);
        postData.append("email", RegisterEmail);
        postData.append("password", RegisterPassword);
        dispatch(registerAction(postData)).then(() => {
            setIsRegisterSubmit(false);
        });
    };

    React.useEffect(() => {
        auth();
    }, [isSubmit, token]);
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
                                            onChange={(e) =>
                                                setRegisterFname(e.target.value)
                                            }
                                        />

                                        <p className="text-danger">
                                            {REGISTERED_VALIDATION.first_name}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Last Name"</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Last Name"
                                            onChange={(e) =>
                                                setRegisterLname(e.target.value)
                                            }
                                        />
                                        <p className="text-danger">
                                            {REGISTERED_VALIDATION.last_name}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <label>E-mail</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="E-mail"
                                            onChange={(e) =>
                                                setRegisterEmail(e.target.value)
                                            }
                                        />
                                        <p className="text-danger">
                                            {REGISTERED_VALIDATION.email}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Mobile No</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Mobile No"
                                            onChange={(e) =>
                                                setRegisterMobileNo(
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <p className="text-danger">
                                            {REGISTERED_VALIDATION.mobile_no}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setRegisterPassword(
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <p className="text-danger">
                                            {REGISTERED_VALIDATION.password}
                                        </p>
                                    </div>

                                    <div className="col-md-12">
                                        <button
                                            className="btn"
                                            onClick={SubmitRegister}
                                        >
                                            {isRegisterSubmit
                                                ? "Please Wait..."
                                                : "Register"}
                                        </button>
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
                                            onChange={(e) =>
                                                setLoginEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setLoginPassword(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <button
                                            className="btn"
                                            onClick={SubmitLogin}
                                        >
                                            {isSubmit
                                                ? "Please Wait..."
                                                : "Login"}
                                        </button>
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
