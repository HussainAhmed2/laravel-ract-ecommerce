import React ,{useEffect} from 'react'
import NavBar from './Widgets/NavBar'
import SideBar from './Widgets/SideBar'

const AdminHeader = () => {
    const url = process.env.MIX_APP_URL || "";
    const startScript = () => {
        const script = document.createElement("script");
        const script2 = document.createElement("script");
        const script3 = document.createElement("script");
        const script4 = document.createElement("script");
        const script5 = document.createElement("script");
        const script6 = document.createElement("script");
        const script7 = document.createElement("script");

        script5.src = url + "public/AdminAssets/vendors/datatables.net/jquery.dataTables.js";
        script4.src = url + "public/AdminAssets/vendors/datatables.net-bs4/dataTables.bootstrap4.js";
        script7.src = url + "public/AdminAssets/vendors/select2/select2.min.js";
        script.src = url + "public/AdminAssets/js/dashboard.js";
        script3.src = url + "public/AdminAssets/vendors/tinymce/tinymce.min.js";
        script2.src = url + "public/AdminAssets/js/editorDemo.js";
        script6.src = url + "public/AdminAssets/js/data-table.js";


        document.body.appendChild(script5);
        document.body.appendChild(script4);
        document.body.appendChild(script6);
        document.body.appendChild(script);
        document.body.appendChild(script3);
        document.body.appendChild(script2);



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
