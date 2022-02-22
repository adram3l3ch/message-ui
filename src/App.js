import React from "react";
import Aside from "./components/aside/Aside";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home";
import "./style.css";

function App() {
    return (
        <div className="app">
            <Aside />
            <Home />
            <Chat />
        </div>
    );
}

export default App;
