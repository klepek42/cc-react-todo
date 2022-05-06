import React, {useState} from "react";
import "./Aufgabe.css";

interface Aufgabe {
    title: string;
    beschreibung: string;
    erledigt: boolean;
}

const Aufgabe = ({title, beschreibung, erledigt}: Aufgabe) => {
    const [done, setDone] = useState(erledigt);

    const onClickErledigt = (): void => {
        setDone(!done);
    };

    return (<div className="todo-list-item">
        <div className="title"><input data-testid={`check-${title}`} onChange={onClickErledigt} type="checkbox"
                                      checked={done}/>{title}</div>
        <div className="beschreibung">{beschreibung}</div>
    </div>);
}

export default Aufgabe;