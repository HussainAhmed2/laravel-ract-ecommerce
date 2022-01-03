import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Brands from "./components/widgets/Home/Brands";
import CalltoAction from "./components/widgets/Home/CalltoAction";
import Categories from "./components/widgets/Home/Categories";
import FeaturedProducts from "./components/widgets/Home/FeaturedProducts";
import MainSlider from "./components/widgets/Home/MainSlider";
import Newsletter from "./components/widgets/Home/Newsletter";
import RecentProducts from "./components/widgets/Home/RecentProducts";
import Reviews from "./components/widgets/Home/Reviews";
import Services from "./components/widgets/Home/Services";

const Home = () => {
    const appUrl = process.env.MIX_APP_URL || "";
    const startScript = () => {
        const script = document.createElement("script");
        script.src = appUrl + "public/WebsiteAssets/js/main.js";
        document.body.appendChild(script);
        console.log(script);
    };
    useEffect(() => {
        startScript();
    }, [appUrl]);
    return (
        startScript && (
            <>
                <Header />
                <MainSlider />
                <Brands />
                <Services />
                <Categories />
                <CalltoAction />
                <FeaturedProducts />
                <Newsletter />
                <RecentProducts />
                <Reviews />
                <Footer />
            </>
        )
    );
};
export default Home;
