import React from "react";
import { BsMic } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import Message from "./Message";
import avatar7 from "../../assets/avatar7.jpg";
import avatar8 from "../../assets/avatar8.jpg";
import avatar9 from "../../assets/avatar9.jpg";
import avatar10 from "../../assets/avatar10.jpg";

const List = () => {
    return (
        <div className="messages__flow">
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
        </div>
    );
};

export default List;
