import { useState } from "react";

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);  // Estado para la selección

  // Funciones para manejar el enfoque del input
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Función para manejar la selección de una opción
  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  // Cambiar la clase según si el item está seleccionado o no
  const getItemClass = (item) => {
    return selectedItem === item ? "selected" : ""; // Establecer la clase 'selected' si el item está seleccionado
  };

  return (
    <div className="searchBar">
      <input
        className="searchBar-input"
        type="text"
        placeholder="Buscar"
        name="search"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {isFocused && (
        <div className="searchOptions">
          <ul>
            <li
              className={getItemClass("Github")}
              onClick={() => handleItemSelect("Github")}
            >
              GitHub
            </li>
            <li
              className={getItemClass("Twitter")}
              onClick={() => handleItemSelect("Twitter")}
            >
              Twitter
            </li>
            <li
              className={getItemClass("LinkedIn")}
              onClick={() => handleItemSelect("LinkedIn")}
            >
              LinkedIn
            </li>
            <li
              className={getItemClass("Instagram")}
              onClick={() => handleItemSelect("Instagram")}
            >
              Instagram
            </li>
            <li
              className={getItemClass("MyKnowledge")}
              onClick={() => handleItemSelect("MyKnowledge")}
            >
              My Knowledge
            </li>
            <li
              className={getItemClass("AcademicStudies")}
              onClick={() => handleItemSelect("AcademicStudies")}
            >
              Academic Studies
            </li>
            <li
              className={getItemClass("AboutMe")}
              onClick={() => handleItemSelect("AboutMe")}
            >
              About Me
            </li>
            <li
              className={getItemClass("Competitions")}
              onClick={() => handleItemSelect("Competitions")}
            >
              Competitions
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}