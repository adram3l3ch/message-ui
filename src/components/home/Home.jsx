import React from "react";
import Footer from "../footer/Footer";
import Messages from "../messages/Messages";
import Online from "../online/Online";
import Profile from "../profile/Profile";

const Home = () => {
    const style = {
        height: "100vh",
        minWidth: "375px",
        display: "flex",
        flexDirection: "column",
    };
    return (
        <section className="home" style={style}>
            <Profile />
            <Online />
            <Messages />
            <Footer />
        </section>
    );
};

export default Home;
