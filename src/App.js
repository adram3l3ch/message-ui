import React from "react";
import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Messages from "./components/messages/Messages";
import Online from "./components/online/Online";
import Profile from "./components/profile/Profile";
import "./style.css";

function App() {
    return (
        <div className="app">
            <Aside />
            <Home />
        </div>
    );
}

export default App;
