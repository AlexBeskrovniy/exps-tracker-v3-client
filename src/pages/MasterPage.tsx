import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MasterPage = () => {
    return(
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    );
};

export default MasterPage;