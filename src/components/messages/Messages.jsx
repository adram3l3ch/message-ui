import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import Message from "./Message";
import avatar7 from "../../assets/avatar7.jpg";
import avatar8 from "../../assets/avatar8.jpg";
import avatar9 from "../../assets/avatar9.jpg";
import avatar10 from "../../assets/avatar10.jpg";

const Messages = () => {
    return (
        <article className="messages">
            <header className="messages__header">
                <h2 className="messages__title">Messages</h2>
                <BsChevronDown className="messages__header__icon up" />
                <FiEdit className="messages__header__icon" />
                <AiOutlineStar className="messages__header__icon" />
            </header>
            <form className="messages__search">
                <BiSearch className="messages__search__icon" />
                <input
                    type="text"
                    className="messages__search__input"
                    placeholder="Search"
                />
            </form>
            <Message
                src={avatar7}
                name={"Sunoe Mainir"}
                text="Sunoe is typing..."
                Icon={AiOutlineEdit}
            />
            <Message
                src={avatar10}
                name={"Kick Andi"}
                text="Voice message"
                Icon={BsMic}
            />
            <Message
                src={avatar9}
                name={"Group #1"}
                text="You: wow, that's an interesting place asd asd as "
            />
            <Message src={avatar8} name={"John  Doe"} text="Voice message" Icon={BsMic} />
        </article>
    );
};

export default Messages;
