import Footer from "../Main/Footer";
import React from "react";
import Routers from "../../routers/Routers";
import Header from "../Main/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
