import React, {useState} from 'react';
import Aufgabe from './Aufgabe';
import NeueAufgabe from "./NeueAufgabe";
import './Todos.css';

interface Props {
    title: string;
    hide: boolean;
    newTodo: boolean;
    setNewTodo: (newTodo: boolean) => void;
}

const DUMMY_AUFGABEN: Aufgabe[] = [
    {title: "Lecker essen", beschreibung: "Etwas sehr köstliches mit viel Käse und Bacon essen!", erledigt: false},
    {title: "React lernen", beschreibung: "Ganz viel wichtige React Grundlagen erlernen.", erledigt: false},
    {title: "Kaffee trinken", beschreibung: "Kaffee trinken um wach zu werden", erledigt: true}
];

const Todos = ({title, hide, newTodo, setNewTodo}: Props) => {
    const [aufgaben, setAufgaben] = useState(DUMMY_AUFGABEN);

    const addAufgabeHandler = (aufgabe: Aufgabe): void => {

        setAufgaben((prevAufgaben): Aufgabe[] => {
            return [...prevAufgaben, aufgabe];
        });

        setNewTodo(false);
    }

    return (
        <div>
            {!hide && (
                <div data-testid="todoWrapper" className="todo-list">
                    <h2>{title}</h2>
                    {aufgaben.map((aufgabe, index) =>
                        <Aufgabe key={index} title={aufgabe.title}
                                 beschreibung={aufgabe.beschreibung}
                                 erledigt={aufgabe.erledigt}/>)}
                </div>
            )}

            {newTodo && <NeueAufgabe onAddAufgabe={addAufgabeHandler}/>}
        </div>);
}

export default Todos;