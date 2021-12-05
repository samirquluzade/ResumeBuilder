import React from 'react';
import UserHeader from "./UserHeader";
import MainUserSection from "./MainUserSection";
import Settings from "./Settings";
import Footer from "./Footer";

const User = () => {
    return(
        <>
        <UserHeader />
        {/*<MainUserSection />*/}
        <Settings />
        <Footer/>
        </>
    )
}

export default User;