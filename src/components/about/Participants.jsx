import React from "react";
import avatar7 from "../../assets/avatar7.jpg";
import avatar8 from "../../assets/avatar8.jpg";
import avatar9 from "../../assets/avatar9.jpg";

const Participant = ({ img, name, about }) => {
    return (
        <div className="about__participant">
            <img src={img} alt="dp" />
            <div className="about__participant__details">
                <h3>{name}</h3>
                <p>{about}</p>
            </div>
        </div>
    );
};

const Participants = () => {
    return (
        <article className="about__participants">
            <header>
                <h2>24 Participants</h2>
                <a href="/">See all</a>
            </header>
            <div className="about__participants__list">
                <Participant
                    img={avatar7}
                    name="Marimo Zoldiac"
                    about="Busy! Sorry for Slowers"
                />
                <Participant img={avatar8} name="Rojer Mozart" about="At Work" />
                <Participant img={avatar9} name="Convy Suchinda" about="Gaming and IT" />
            </div>
        </article>
    );
};

export default Participants;
