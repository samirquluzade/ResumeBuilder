import React from 'react';

import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";
import {Button, Modal} from "react-bootstrap";

const Home = (props) => {
    return(
        <>
        <Header />
        <MainSection />
        <Footer />
        </>
    );
}


export default Home;