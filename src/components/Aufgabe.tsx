import React, {useState} from "react";
import "./Aufgabe.css";

interface Aufgabe {
    title: string;
    beschreibung: string;
    erledigt: boolean;
}

const Aufgabe = ({title, beschreibung, erledigt}:Aufgabe) => {
    const [erledigtState, setErledigtState] = useState(erledigt);

    const onClickErledigt = () => {
        setErledigtState(!erledigtState);
    };

    return (<div className="aufgabe">
                <div className="title"><input onChange={onClickErledigt} type="checkbox" checked={erledigtState}/>{title}</div>
                <div className="beschreibung">{beschreibung}</div>
            </div>);
}

export default Aufgabe;