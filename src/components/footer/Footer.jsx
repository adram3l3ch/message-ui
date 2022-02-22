import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer">
            <AiOutlineEllipsis className="ellipsis" />
            <div className="live">
                <BsPlay />
                <p>LIVE</p>
            </div>
            <p className="time">23:54</p>
            <div className="images">
                <img src={require("../../assets/avatar2.jpg")} alt="" aria-hidden />
                <img src={require("../../assets/avatar11.jpg")} alt="" aria-hidden />
            </div>
            <p className="number">6</p>
        </footer>
    );
};

export default Footer;
