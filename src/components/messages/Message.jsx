import React from "react";
import OnlineImage from "../online/OnlineImage";

const Message = ({ name, src, text, Icon }) => {
    return (
        <article className="message">
            <OnlineImage src={src} className="green" />
            <div className="message__content">
                <h3 className="message__sender__name">{name}</h3>
                <div className="message__text">
                    {Icon && <Icon className="message__icon" />}
                    <p>{text}</p>
                </div>
            </div>
        </article>
    );
};

export default Message;
