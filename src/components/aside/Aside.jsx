import React from "react";
import { MdOutlineDashboardCustomize, MdOutlinePeopleAlt } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { BiBookmarkPlus, BiLogOut } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { DiReact } from "react-icons/di";
import MenuBarIcon from "./MenuBarIcon";

const Aside = () => {
    return (
        <aside className="menubar">
            <ul className="menubar__icons">
                <MenuBarIcon Icon={DiReact} classNames={["logo"]} />
                <MenuBarIcon Icon={MdOutlineDashboardCustomize} />
                <MenuBarIcon Icon={BsChatDots} classNames={["menubar__icon--active"]} />
                <MenuBarIcon Icon={MdOutlinePeopleAlt} />
                <MenuBarIcon Icon={FiPhoneCall} />
                <MenuBarIcon Icon={BiBookmarkPlus} />
                <MenuBarIcon Icon={IoSettingsOutline} />
                <MenuBarIcon Icon={IoMdAddCircleOutline} classNames={["add"]} />
                <MenuBarIcon Icon={BiLogOut} classNames={["logout"]} />
            </ul>
        </aside>
    );
};

export default Aside;
