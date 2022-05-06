import React, {useState} from 'react';
import './App.css';
import Startseite from "./components/Startseite";
import Todos from "./components/Todos";

function App() {
    const [title, setTitle] = useState("My Todos");
    const [hide, setHide] = useState(false);

    const onClickHide = () => {
        setHide(!hide);
    };

    return (
        <div className="App">
            <div>
                <Startseite/>
                <br/>
                <button onClick={onClickHide}>{hide ? "Show" : "Hide"} Todos</button>
                <br/>
                <Todos title={title} hide={hide}/>
                <br/>
                <button>New Todo</button>
            </div>
        </div>
    );
}

export default App;
