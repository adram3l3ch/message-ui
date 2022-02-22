import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const Header = () => {
    return (
        <header className="messages__header">
            <h2 className="messages__title">Messages</h2>
            <BsChevronDown className="messages__header__icon up" />
            <FiEdit className="messages__header__icon" />
            <AiOutlineStar className="messages__header__icon" />
        </header>
    );
};

export default Header;
