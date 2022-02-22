import React from "react";
import Footer from "../footer/Footer";
import Messages from "../messages/Messages";
import Online from "../online/Online";
import Profile from "../profile/Profile";

const Home = () => {
    return (
        <section className="home">
            <Profile />
            <Online />
            <Messages />
            <Footer />
        </section>
    );
};

export default Home;
