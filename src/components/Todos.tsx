import React from 'react';
import Aufgabe from './Aufgabe';

interface Props {
    title: string;
    hide: boolean;
}

const aufgaben:Aufgabe[] = [
    {title: "Lecker essen", beschreibung: "Etwas sehr köstliches mit viel Käse und Bacon essen!", erledigt: false},
    {title: "React lernen", beschreibung: "Ganz viel wichtige React Grundlagen erlernen.", erledigt: false},
    {title: "Kaffee trinken", beschreibung: "Kaffee trinken um wach zu werden", erledigt: true}
];

const Todos = ({title, hide}:Props) => {
    return (<div hidden={hide}>
                <h2>{title}</h2>
                {aufgaben.map((aufgabe, index) =>
                    <Aufgabe key={index} title={aufgabe.title} beschreibung={aufgabe.beschreibung} erledigt={aufgabe.erledigt}/>)}
            </div>);
}

export default Todos;