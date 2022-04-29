import React, {useState} from 'react';
import './App.css';
import Startseite from "./components/Startseite";
import Todos from "./components/Todos";

function App() {
    const [title, setTitle] = useState("Käse");
    const [inputTitle, setInputTitle] = useState("");

    const onClickHandler = () => setTitle(inputTitle);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value);
    };

    return (
        <div className="App">
            <Startseite/>
            <Todos title={title}/>
            <input onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>Change title</button>
        </div>
    );
}

export default App;
