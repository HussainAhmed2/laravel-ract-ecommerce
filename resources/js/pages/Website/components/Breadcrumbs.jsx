import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
    return (
        <>
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to={props.FirstUrl}>
                                <a>{props.FistName}</a>
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to={props.SecondUrl}>
                                <a>{props.SecondName}</a>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">
                            {props.CurrentName}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Breadcrumbs;
