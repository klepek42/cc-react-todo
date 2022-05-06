import React, {useState} from "react";
import Aufgabe from "./Aufgabe";
import './NeueAufgabe.css';

interface Props {
    onAddAufgabe: (aufgabe: Aufgabe) => void;
}

const NeueAufgabe = ({onAddAufgabe}: Props) => {
    const [title, setTitle] = useState<string>('');
    const [beschreibung, setBeschreibung] = useState<string>('');

    const onChangeAufgabeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    };

    const onChangeBeschreibungHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setBeschreibung(event.target.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
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

    return (<div className="neue-aufgabe-wrapper">
        <div>
            <form onSubmit={submitHandler}>
                <div className="neue-aufgabe">
                    <h3>Neue Aufgabe</h3>
                    <div>
                        <label>Aufgabe</label><br/>
                        <input onChange={onChangeAufgabeHandler} type="text"/>
                    </div>
                    <br/>
                    <div>
                        <label>Beschreibung</label><br/>
                        <input onChange={onChangeBeschreibungHandler} type="text"/>
                    </div>
                    <button className="button" type="submit">Aufgabe hinzufügen</button>
                    <br/>
                    <button className="button">Abbrechen</button>
                </div>
            </form>
            <br/>
        </div>
    </div>);
}

export default NeueAufgabe;