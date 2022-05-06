import React, {useState} from 'react';
import Aufgabe from './Aufgabe';
import NeueAufgabe from "./NeueAufgabe";
import './Todos.css';

interface Props {
    title: string;
    hide: boolean;
}

const DUMMY_AUFGABEN: Aufgabe[] = [
    {title: "Lecker essen", beschreibung: "Etwas sehr köstliches mit viel Käse und Bacon essen!", erledigt: false},
    {title: "React lernen", beschreibung: "Ganz viel wichtige React Grundlagen erlernen.", erledigt: false},
    {title: "Kaffee trinken", beschreibung: "Kaffee trinken um wach zu werden", erledigt: true}
];

const Todos = ({title, hide}: Props) => {
    const [aufgaben, setAufgaben] = useState(DUMMY_AUFGABEN);

    const addAufgabeHandler = (aufgabe: Aufgabe): void => {
        const newAufgabe = {title: 'Neues Todo', beschreibung: 'Neu Beschreibung', erledigt: false};
        console.log("newAufgabe: " + newAufgabe);

        setAufgaben((prevAufgaben): Aufgabe[] => {
            return [aufgabe, ...prevAufgaben];
        });
    }

    return (
        <div>
            <div data-testid="todoWrapper" className="todo-list" hidden={hide}>
                <h2>{title}</h2>
                {aufgaben.map((aufgabe, index) =>
                    <Aufgabe key={index} title={aufgabe.title}
                             beschreibung={aufgabe.beschreibung}
                             erledigt={aufgabe.erledigt}/>)}
            </div>
            <NeueAufgabe onAddAufgabe={addAufgabeHandler}/>
        </div>);
}

export default Todos;