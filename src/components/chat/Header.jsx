import React from "react";
import { BiVideo, BiImageAlt, BiPhoneCall, BiFile } from "react-icons/bi";
import avatar2 from "../../assets/avatar2.jpg";
import avatar5 from "../../assets/avatar4.jpg";

const Header = () => {
    return (
        <header className="chat__header">
            <h3 className="chat__title">Group #1</h3>
            <div className="chat__icons">
                <BiVideo className="chat__icon video" />
                <BiImageAlt className="chat__icon" />
                <BiFile className="chat__icon" />
                <BiPhoneCall className="chat__icon" />
            </div>
            <div className="chat__images">
                <img src={avatar2} alt="none" className="chat__image" />
                <img src={avatar5} alt="none" className="chat__image" />
                <p className="chat__image">+6</p>
            </div>
        </header>
    );
};

export default Header;
