import React, {useState} from "react";
import {Aufgabe} from "../types";
import "./Aufgabe.css";

interface Props {
    aufgabe: Aufgabe;
    removeAufgabeHandler: (aufgabe: Aufgabe) => void;
}

const AufgabeListItem = ({aufgabe, removeAufgabeHandler}: Props) => {
    const {title, beschreibung, erledigt} = aufgabe;
    const [done, setDone] = useState(erledigt);

    const onClickErledigt = (): void => {
        setDone(!done);
    };

    const removeTodo = (aufgabe: Aufgabe): void => {
        removeAufgabeHandler(aufgabe);
    };

    return (<div className="todo-list-item">
        <div className="title"><input data-testid={`check-${title}`} onChange={onClickErledigt} type="checkbox"
                                      checked={done}/>{title}</div>
        <div className="beschreibung">{beschreibung}</div>
        <button className="remove-button" onClick={() => removeTodo(aufgabe)}>Remove</button>
    </div>);
}

export default AufgabeListItem;