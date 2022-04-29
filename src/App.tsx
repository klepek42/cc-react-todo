import React, {useState} from 'react';
import './App.css';
import Startseite from "./components/Startseite";
import Todos from "./components/Todos";

function App() {
    const [title, setTitle] = useState("Käse");
    const [inputTitle, setInputTitle] = useState("");
    const [hide, setHide] = useState(false);

    const onClickHandler = () => setTitle(inputTitle);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value);
    };

    const onClickHide = () => {
        setHide(!hide);
    };

    return (
        <div className="App">
            <Startseite/>
            <button onClick={onClickHide}>Show Todos</button>
            <br />
            <Todos title={title} hide={hide}/>
            <br />
            <input onChange={onChangeHandler}/>
            <button onClick={onClickHandler} placeholder="Titel?">Change title</button>
        </div>
    );
}

export default App;
