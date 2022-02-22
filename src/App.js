import React, { useState } from "react";
import About from "./components/about/About";
import Aside from "./components/aside/Aside";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import "./style.css";

function App() {
    const [theme, setTheme] = useState("light");
    return (
        <>
            <div className={theme === "light" ? "app light" : "app dark"}>
                <Aside />
                <Home />
                <Chat />
                <About />
                <div
                    className="theme-toggle"
                    onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
                >
                    {theme === "light" ? <IoMdSunny /> : <IoMdMoon />}
                </div>
            </div>
            <div className="attribution">
                Designed By <a href="https://dribbble.com/Rohmad_Khoir">Rohmad Khoir</a>{" "}
                Coded By <a href="https://github.com/adram3l3ch">Adarsh</a>
            </div>
        </>
    );
}

export default App;
