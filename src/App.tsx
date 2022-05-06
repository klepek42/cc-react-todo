import React, {useState} from 'react';
import './App.css';
import Startseite from "./components/Startseite";
import Todos from "./components/Todos";

function App() {
    const [title, setTitle] = useState("My Todos");
    const [hide, setHide] = useState(false);
    const [newTodo, setNewTodo] = useState(false);

    const hideTodos = () => {
        setHide(!hide);
    };

    const showNewTodo = () => {
        setNewTodo(!newTodo);
    };

    return (
        <div className="App">
            <div>
                <Startseite/>
                <br/>
                <button onClick={hideTodos}>{hide ? "Show" : "Hide"} Todos</button>
                <br/>
                <Todos title={title} hide={hide} newTodo={newTodo} setNewTodo={setNewTodo}/>
                <br/>
                {!newTodo && (<button onClick={showNewTodo}>Add new Todo</button>)}
            </div>
        </div>
    );
}

export default App;
