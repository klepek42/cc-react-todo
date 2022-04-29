import React from "react";
import "./Aufgabe.css";

interface Aufgabe {
    title: string;
    beschreibung: string;
    erledigt: boolean;
}

const Aufgabe = ({title, beschreibung, erledigt}:Aufgabe) => {
    return (<div className="aufgabe">
                <div className="title"><input type="checkbox" checked={erledigt}></input>{title}</div>
                <div className="beschreibung">{beschreibung}</div>
            </div>);
}

export default Aufgabe;