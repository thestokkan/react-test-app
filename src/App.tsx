import React, {useContext, useState} from 'react';
import './App.css';
import {ThemeContext} from "./theme";
import './theme/variables.css';
import {Button, Input, Link, Modal, Counter, Slider} from "./components";
import {FaBeer, FaBicycle, FaBookOpen, FaLongArrowAltRight} from "react-icons/fa";
import {
    WiCloud,
    WiDayCloudy,
    WiDaySunny,
    WiDaySunnyOvercast,
    WiFog,
    WiRain,
    WiSleet,
    WiSnow,
    WiThunderstorm
} from "react-icons/wi";

function App() {
    // Theme settings
    const themeContext = useContext(ThemeContext);
    const toggleTheme = () => {
        if (themeContext) {
            if (themeContext.theme === "dark") {
                console.log("Set theme to light");
                themeContext.setTheme("light");
            } else {
                console.log("Set theme to dark");
                themeContext.setTheme("dark");
            }
        }
    }

    // Connect input and button
    const [nameInput, setNameInput] = useState('');
    const [updatedName, setUpdatedName] = useState(nameInput);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value);
    };

    const handleClick = () => {
        // 👇 "message" stores input field value
        setUpdatedName(nameInput);
        const welcome = document.getElementById("welcome");
        if (welcome) welcome.className = "";
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        console.log(event.key);

        if (event.key === 'Enter') {
            event.preventDefault();
            handleClick();
        }
    };

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const closeModal = () => setIsModalOpen(false);

    return (
        <div className="App">
            <header className="App-header">
                <div className="toggle-theme">
                    <Button onClick={() => {toggleTheme()}} type={"theme"} id={themeContext!.theme}></Button>
                </div>
                <img className="Bundled-up-logo" src="bundled-up.svg" alt="Bundled up kid"/>
                <h1>
                    BundleUp!
                </h1>

                <div className="temperature-setting">
                    <h4>What's the temperature today?</h4>
                    <Counter></Counter>
                </div>
                <div className="weather-icons">
                    <WiCloud/> <WiDayCloudy/> <WiSleet/> <WiDaySunny/> <WiDaySunnyOvercast/> <WiFog/> <WiRain/>
                    <WiSnow/> <WiThunderstorm/>
                </div>

                <div className="input-and-button flex-row">
                    <Input type="text"
                           className="connect-right"
                           placeholderText="What's your name?"
                           id="name"
                           onChange={handleChange}
                           onKeyDown={handleKeyDown}
                           value={nameInput}
                    />
                    <Button
                        children=<FaLongArrowAltRight/>
                        onClick={handleClick}
                        type="connect"
                    />
                </div>

                <div className="hidden" id="welcome">
                    <h3>{`Hello, ${updatedName}!`}</h3>
                    <h4>What would you like to do?</h4>
                    <div className="icon-buttons flex-row">
                        <Button
                            type="icon"
                            children={<FaBeer/>}
                            onClick={() => {
                                setIsModalOpen((currentValue) => !currentValue);
                            }}
                        />
                        <Button
                            type="icon"
                            children={<FaBicycle/>}
                            onClick={() => {
                                setIsModalOpen((currentValue) => !currentValue);
                            }}
                        />
                        <Button
                            type="icon"
                            children={<FaBookOpen/>}
                            onClick={() => {
                                setIsModalOpen((currentValue) => !currentValue);
                            }}
                        />
                        <Modal title=""
                               isOpen={isModalOpen}
                               closeModal={() => {
                                   setIsModalOpen(false);
                               }}
                        >
                            <h3>Wohoo, let's go!</h3>

                        </Modal>
                    </div>
                </div>
                <div id="slider">
                    <Slider/>
                </div>

                <div className="link-list">
                    <Link url="https://reactjs.org/" text="React"></Link>
                    <Link url="https://github.com/JonatanPaalsson/HTML-CSS/tree/main/react/Day1/my-app/"
                          text="Jonatan's GitHub/React"></Link>
                </div>
            </header>
        </div>
    );
}

export default App;