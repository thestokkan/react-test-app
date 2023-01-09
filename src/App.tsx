import React, {useState} from 'react';
import './App.css';
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
import './variables.css';

function App() {
    // Connect input and button
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        // 👇 "message" stores input field value
        setUpdated(message);
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
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="App">
            <header className="App-header">
                <img className="Bundled-up-logo" src="bundled-up.svg" alt="Bundled up kid"/>
                <h1>
                    Bundle up!
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
                           value={message}
                    />
                    <Button
                        children=<FaLongArrowAltRight/>
                        onClick={handleClick}
                        type="connect"
                    />
                </div>

                <div className="hidden" id="welcome">
                    <h3>{`Hello, ${updated}!`}</h3>
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