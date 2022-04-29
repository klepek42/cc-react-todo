import React from "react";
import "./Aufgabe.css";

interface Aufgabe {
    title: string;
    beschreibung: string;
    erledigt: boolean;
}

const Aufgabe = ({title, beschreibung, erledigt}:Aufgabe) => {
    return (<div className="aufgabe">
                <div className="title">{title}</div>
                <div className="beschreibung">{beschreibung}</div>
                <div>{erledigt}</div>
            </div>);
}

export default Aufgabe;