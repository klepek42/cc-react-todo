import React, {FormEventHandler, useState} from "react";
import Aufgabe from "./Aufgabe";

interface Props {
    onAddAufgabe: (aufgabe:Aufgabe) => void;
}

const NeueAufgabe = ({onAddAufgabe}:Props) => {
    const [title, setTitle] = useState<string>('');
    const [beschreibung, setBeschreibung] = useState<string>('');

    const onChangeAufgabeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setTitle(event.target.value);
    };

    const onChangeBeschreibungHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setBeschreibung(event.target.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>):void => {
        console.log("submitHandler");
        event.preventDefault();

        const aufgabe = {
            title: title,
            beschreibung: beschreibung,
            erledigt: false,
        };

        onAddAufgabe(aufgabe);
        setTitle(title);
        setBeschreibung(beschreibung);
    };

    return (<div>
        <h2>Neue Aufgabe</h2>
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Aufgabe</label>
                    <input onChange={onChangeAufgabeHandler} type="text" />
                </div>
                <div>
                    <label>Beschreibung</label>
                    <input onChange={onChangeBeschreibungHandler} type="text" />
                </div>
            <button type="submit">Aufgabe hinzufügen</button>
            </form>
            <br />
        </div>
    </div>);
}

export default NeueAufgabe;