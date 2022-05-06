import React, {useState} from 'react';
import './App.css';
import Startseite from "./components/Startseite";
import Todos from "./components/Todos";

function App() {
    const [title, setTitle] = useState("My Todos");
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
            <div>
                <Startseite/>
                <br/>
                <button onClick={onClickHide}>Show Todos</button>
                <br/>
                <Todos title={title} hide={hide}/>
                <br/>
                <button>New Todo</button>
                {/*<br/>*/}
                {/*<button onClick={onClickHandler}>Change title</button>*/}
                {/*<br/>*/}
                {/*<input placeholder="Bitte Titel eingeben" onChange={onChangeHandler}/>*/}
                {/*<br/>*/}
            </div>
        </div>
    );
}

export default App;
