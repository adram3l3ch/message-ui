import React from "react";
import { BiVideo, BiImageAlt, BiFile } from "react-icons/bi";
import { MdAudiotrack } from "react-icons/md";

const SharedMedia = ({ Icon, name, about }) => {
    return (
        <div className="about__SharedMedia">
            <div className="icon">
                <Icon />
            </div>
            <div className="about__SharedMedia__details">
                <h3>{name}</h3>
                <p>{about}</p>
            </div>
        </div>
    );
};

const SharedMedias = () => {
    return (
        <article className="about__SharedMedias">
            <header>
                <h2>Shared Media</h2>
                <a href="/">See all</a>
            </header>
            <div className="about__SharedMedias__list">
                <SharedMedia Icon={BiFile} name="Fix Skripsi.pdf" about="1.8 MB" />
                <SharedMedia Icon={MdAudiotrack} name="RAudio Load.mp3" about="5 MB" />
                <SharedMedia Icon={BiImageAlt} name="Poster TA.png" about="2 MB" />
                <SharedMedia Icon={BiVideo} name="Company AUD.mp4" about="25 MB" />
            </div>
        </article>
    );
};

export default SharedMedias;
