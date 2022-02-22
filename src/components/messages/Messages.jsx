import React from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

const Messages = () => {
    return (
        <article className="messages">
            <Header />
            <Form />
            <List />
        </article>
    );
};

export default Messages;
