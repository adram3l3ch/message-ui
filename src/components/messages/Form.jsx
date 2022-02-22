import React from "react";
import { BiSearch } from "react-icons/bi";

const Form = () => {
    return (
        <form className="messages__search">
            <BiSearch className="messages__search__icon" />
            <input type="text" className="messages__search__input" placeholder="Search" />
        </form>
    );
};

export default Form;
