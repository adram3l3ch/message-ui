import React from "react";
import avatar from "../../assets/avatar1.jpg";

const Profile = () => {
    return (
        <header className="profile">
            <img src={avatar} alt="user__avatar" className="profile__avatar" />
            <div className="profile__details">
                <h2 className="profile__name">Rohmad Khoir</h2>
                <p className="profile__desc">My account</p>
            </div>
        </header>
    );
};

export default Profile;
