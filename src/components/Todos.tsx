import React, { useState } from "react";
import AufgabeListItem from "./AufgabeListItem";
import NeueAufgabe from "./NeueAufgabe";
import { Aufgabe } from "../types";
import "./Todos.css";

interface Props {
  title: string;
  hide: boolean;
  newTodo: boolean;
  setNewTodo: (newTodo: boolean) => void;
}

const DUMMY_AUFGABEN: Aufgabe[] = [
  {
    title: "Lecker essen",
    beschreibung: "Etwas sehr köstliches mit viel Käse und Bacon essen!",
    erledigt: false,
  },
  {
    title: "React lernen",
    beschreibung: "Ganz viel wichtige React Grundlagen erlernen.",
    erledigt: false,
  },
  {
    title: "Kaffee trinken",
    beschreibung: "Kaffee trinken um wach zu werden",
    erledigt: true,
  },
];

const Todos = ({ title, hide, newTodo, setNewTodo }: Props) => {
  const [aufgaben, setAufgaben] = useState(DUMMY_AUFGABEN);
  const [sucheText, setSucheText] = useState("");

  const addAufgabeHandler = (aufgabe: Aufgabe): void => {
    setAufgaben((prevAufgaben): Aufgabe[] => {
      return [...prevAufgaben, aufgabe];
    });

    setNewTodo(false);
  };

  const removeAufgabeHandler = (aufgabeToRemove: Aufgabe): void => {
    setAufgaben((prevAufgaben): Aufgabe[] => {
      const filteredAufgaben = prevAufgaben.filter(
        (aufgabe) => aufgabe.title !== aufgabeToRemove.title
      );
      return filteredAufgaben;
    });
  };

  const changeSucheHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 2) {
      setSucheText(event.target.value);
    }
  };

  const filterTodos = (aufgabe: Aufgabe): boolean =>
    sucheText.length > 2
      ? aufgabe.title.length > 2 && aufgabe.title === sucheText
      : true;

  return (
    <div>
      {!hide && (
        <div data-testid="todoWrapper" className="todo-list">
          <h2>{title}</h2>
          <input
            className="search-input"
            data-testid="search-input"
            type="text"
            placeholder="Suche..."
            onChange={changeSucheHandler}
          />
          {aufgaben.filter(filterTodos).map((aufgabe, index) => (
            <AufgabeListItem
              key={index}
              aufgabe={aufgabe}
              removeAufgabeHandler={removeAufgabeHandler}
            />
          ))}
        </div>
      )}

      {newTodo && <NeueAufgabe onAddAufgabe={addAufgabeHandler} />}
    </div>
  );
};

export default Todos;
