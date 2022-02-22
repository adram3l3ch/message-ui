import React from "react";
import wave from "../../assets/sound-waves.png";
import { BsFillPlayFill } from "react-icons/bs";
import img1 from "../../assets/msg1.jpg";
import img2 from "../../assets/msg2.jpg";

const Audio = () => {
    return (
        <div className="audio">
            <div className="icon">
                <BsFillPlayFill />
            </div>
            {Array(6)
                .fill(0)
                .map((v, i) => (
                    <img
                        className="audio__strike"
                        alt=""
                        aria-hidden
                        src={wave}
                        key={i}
                    ></img>
                ))}
        </div>
    );
};

const Images = () => {
    return (
        <div className="chat__image__msgs">
            <img src={img1} alt="msg" />
            <img src={img2} alt="msg" />
        </div>
    );
};

const SingleChat = ({ dp, className, name, messages, audio, image, time }) => {
    return (
        <article className={"chat__single " + className}>
            <img src={dp} alt="" className="chat__dp" />
            <div className="chat__content">
                <h3 className="chat__user__name">
                    {name} <span>{time}</span>
                </h3>
                <div className="message__flow">
                    {messages.map((message, i) => (
                        <p className="chat__text" key={i}>
                            {message}
                        </p>
                    ))}
                    {audio && <Audio />}
                    {image && <Images />}
                </div>
            </div>
        </article>
    );
};

export default SingleChat;
