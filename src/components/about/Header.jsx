import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import dp from "../../assets/avatar11.jpg";

const Header = () => {
    return (
        <header className="about__header">
            <FaEllipsisH className="ellipsis" />
            <div className="about__group">
                <img src={dp} alt="dp" />
                <h2>Group #1</h2>
                <p>@Odama</p>
            </div>
        </header>
    );
};

export default Header;
