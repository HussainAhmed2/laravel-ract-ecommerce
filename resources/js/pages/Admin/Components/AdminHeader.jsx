import React ,{useEffect} from 'react'
import NavBar from './Widgets/NavBar'
import SideBar from './Widgets/SideBar'

const AdminHeader = () => {
    const url = process.env.MIX_APP_URL || "";
    const startScript = () => {
        const script = document.createElement("script");
        script.src = url + "public/AdminAssets/js/dashboard.js";
        document.body.appendChild(script);
        console.log("script url ",script);
    };

    useEffect(() => {
        startScript();
    }, [url]);
    return (
        <>

            <NavBar/>
            <SideBar />


        </>
    )
}

export default AdminHeader
