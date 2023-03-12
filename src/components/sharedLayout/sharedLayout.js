import { Outlet } from "react-router-dom";
import Layout from "../layout/layout";

const SharedLayout=()=>{

    return(
        <>
            <Layout>
                <Outlet/>
            </Layout>
        </>
    )
}

export default SharedLayout;