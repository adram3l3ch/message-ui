import React from "react";
import Header from "./Header";
import SingleChat from "./SingleChat";
import avatar7 from "../../assets/avatar7.jpg";
import avatar8 from "../../assets/avatar8.jpg";
import avatar1 from "../../assets/avatar1.jpg";
import Form from "./Form";

const Chat = () => {
    return (
        <section className="chat">
            <Header />
            <SingleChat
                className="receive"
                name="Nagita salavina"
                messages={["Hii, are we going on new year's holiday?", "sdfsd"]}
                dp={avatar7}
                time="1d"
            />
            <h3 className="date">Today, 17 Nov</h3>
            <SingleChat
                className="receive"
                name="Dedi Gunawan"
                messages={["So, here I have some recommended places, let's see"]}
                dp={avatar8}
                time="1d"
                audio
                image
            />
            <SingleChat
                className="send"
                name="You"
                messages={["Wow, that's an interesting place"]}
                dp={avatar1}
                time="10m"
            />
            <Form />
        </section>
    );
};

export default Chat;
