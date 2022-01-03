import React from "react";

const Brands = () => {
    const url = process.env.MIX_APP_URL || "";
    return (
        <>
            <div className="brand">
                <div className="container-fluid">
                    <div className="brand-slider">
                        <div className="brand-item">
                            <img
                                src={
                                    url + "public/WebsiteAssets/img/brand-1.png"
                                }
                                alt=""
                            />
                        </div>
                        <div className="brand-item">
                            <img
                                src={
                                    url + "public/WebsiteAssets/img/brand-2.png"
                                }
                                alt=""
                            />
                        </div>
                        <div className="brand-item">
                            <img
                                src={
                                    url + "public/WebsiteAssets/img/brand-3.png"
                                }
                                alt=""
                            />
                        </div>
                        <div className="brand-item">
                            <img
                                src={
                                    url + "public/WebsiteAssets/img/brand-4.png"
                                }
                                alt=""
                            />
                        </div>
                        <div className="brand-item">
                            <img
                                src={
                                    url + "public/WebsiteAssets/img/brand-5.png"
                                }
                                alt=""
                            />
                        </div>
                        <div className="brand-item">
                            <img
                                src={
                                    url + "public/WebsiteAssets/img/brand-6.png"
                                }
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Brands;
