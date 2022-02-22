import React from "react";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import avatar5 from "../../assets/avatar5.jpg";
import avatar6 from "../../assets/avatar6.jpg";
import OnlineImage from "./OnlineImage";

const Online = () => {
    return (
        <article className="online">
            <h2 className="online__title">Online now</h2>
            <p className="online__number">10</p>
            <div className="online__profiles">
                <OnlineImage src={avatar2} className="red" />
                <OnlineImage src={avatar3} className="red" />
                <OnlineImage src={avatar4} className="red" />
                <OnlineImage src={avatar5} className="red" />
                <OnlineImage src={avatar6} className="red" />
            </div>
        </article>
    );
};

export default Online;
