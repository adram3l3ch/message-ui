import React from "react";
import Header from "./Header";
import Participants from "./Participants";
import SharedMedias from "./SharedMedias";

const About = () => {
    return (
        <section className="about">
            <Header />
            <Participants />
            <SharedMedias />
        </section>
    );
};

export default About;
