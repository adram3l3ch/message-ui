import React from "react";

const OnlineImage = ({ src, className }) => {
    return (
        <div className={"online__profile " + className}>
            <img src={src} alt="avatar" className="online__profile__image " />
        </div>
    );
};

export default OnlineImage;
