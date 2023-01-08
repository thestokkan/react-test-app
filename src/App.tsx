import React, {useState} from 'react';
import './App.css';
import {Button, Input, Link, Slider} from "./components";
import {FaBeer, FaBicycle, FaBookOpen} from "react-icons/fa";
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

    return (
        <div className="App">
            <header className="App-header">
                <img className="App-icon" src="logo192.png" alt="React logo"/>
                <h1>
                    Welcome to my amazing React app!
                </h1>

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
                        children=">>"
                        onClick={handleClick}
                        type="connect"
                    />
                </div>

                <div className="hidden" id="welcome">
                    <h3>{`Hello, ${updated}!`}</h3>
                    <h4>What would you like to do?</h4>
                    <div className="flex-row">
                        <Button
                            type="icon"
                            children={<FaBeer/>}
                            onClick={() => alert("Cheers! 🍻")}
                        />
                        <Button
                            type="icon"
                            children={<FaBicycle/>}
                            onClick={() => alert("Let's go! 🚲️")}
                        />
                        <Button
                            type="icon"
                            children={<FaBookOpen/>}
                            onClick={() => alert("🤓")}
                        />
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