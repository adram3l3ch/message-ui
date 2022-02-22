import React from "react";
import About from "./components/about/About";
import Aside from "./components/aside/Aside";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home";
import "./style.css";

function App() {
    return (
        <div className="app light">
            <Aside />
            <Home />
            <Chat />
            <About />
        </div>
    );
}

export default App;
