import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import AdminLogin from "../pages/Admin/Auth/AdminLogin";
import AdminRegister from "../pages/Admin/Auth/AdminRegister";
import Dashboard from "../pages/Admin/Dashboard";
import CreateProduct from "../pages/Admin/Products/CreateProduct";
import ProductsList from "../pages/Admin/Products/ProductsList";
import Login from "../pages/Website/Auth/Login";
import Register from "../pages/Website/Auth/Register";
import Cart from "../pages/Website/Cart";
import CheckOut from "../pages/Website/CheckOut";
import Home from "../pages/Website/Home";
import ProductDetails from "../pages/Website/ProductDetails";
import Products from "../pages/Website/Products";
import { persister, store } from "../Redux/Store/store";

function Main() {
    let any_dir = process.env.MIX_SUB_DIR || "";
    let app = process.env.MIX_APP_URL || "";
    console.log(app + "Admin/Dashbaord");

    return (
        <>
            <Router>
                <Switch>
                    <Route
                        exact
                        path={"/" + any_dir + "Login"}
                        component={Login}
                    />
                    <Route
                        exact
                        path={"/" + any_dir + "Register"}
                        component={Register}
                    />

                    <Route exact path={"/" + any_dir} component={Home} />
                    <Route path={"/" + any_dir + "Home"} component={Home} />
                    <Route
                        path={"/" + any_dir + "Products"}
                        component={Products}
                    />
                    <Route
                        path={"/" + any_dir + "ProductDetails"}
                        component={ProductDetails}
                    />

                    <Route path={"/" + any_dir + "Cart"} component={Cart} />
                    <Route
                        path={"/" + any_dir + "Checkout"}
                        component={CheckOut}
                    />

                    {/* <Route
                            path={"/" + any_dir + "Show/:id"}
                            component={Show}
                        /> */}

                    <Route
                        exact
                        path={"/" + any_dir + "admin/Dashboard"}
                        component={Dashboard}
                    />
                    <Route
                        exact
                        path={"/" + any_dir + "admin/Login"}
                        component={AdminLogin}
                    />
                    <Route
                        exact
                        path={"/" + any_dir + "admin/Register"}
                        component={AdminRegister}
                    />
                    <Route
                        exact
                        path={"/" + any_dir + "admin/ProductsList"}
                        component={ProductsList}
                    />
                    <Route
                        exact
                        path={"/" + any_dir + "admin/CreateProduct"}
                        component={CreateProduct}
                    />
                </Switch>
            </Router>
        </>
    );
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                <React.StrictMode>
                    <Main />
                </React.StrictMode>
            </PersistGate>
        </Provider>,
        document.getElementById("main")
    );
}
