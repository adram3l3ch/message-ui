import React from "react";

const MenuBarIcon = ({ Icon, classNames }) => {
    return (
        <li className={`menubar__icon ${classNames?.join(" ")}`}>
            <Icon />
        </li>
    );
};

export default MenuBarIcon;
