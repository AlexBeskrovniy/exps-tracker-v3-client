import { Outlet } from "react-router-dom";

import { Container } from "../components/styled/Layout.styled";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MasterPage = () => {
    return(
        <>
            <Header />
                <Container>
                    <Outlet />
                </Container>
            <Footer />
        </>
    );
};

export default MasterPage;