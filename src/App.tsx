import React, {useState} from 'react';
import './App.css';
import Startseite from "./components/Startseite";
import Todos from "./components/Todos";

function App() {
    const [title, setTitle] = useState("Käse");

    const onClickHandler = () => setTitle("Wurst");

    return (
        <div className="App">
            <Startseite/>
            <Todos title={title}/>
            <button onClick={onClickHandler}>Change Käse to Wurst</button>
        </div>
    );
}

export default App;
