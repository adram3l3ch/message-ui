import React from "react";
import dp from "../../assets/avatar1.jpg";
import { BsMic } from "react-icons/bs";
import { RiAttachment2 } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";

const Form = () => {
    return (
        <form className="chat__form">
            <img src={dp} alt="" className="dp" />
            <input type="text" placeholder="Your Message..." />
            <BsMic className="form__icon" />
            <RiAttachment2 className="form__icon" />
            <RiSendPlaneFill className="form__icon send" />
        </form>
    );
};

export default Form;
