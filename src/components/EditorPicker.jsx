import React, { useState } from "react";
import buttonIcon from "../images/button.png";
import dropdownIcon from "../images/dropdown.png";
import tableIcon from "../images/table.png";
import searchIcon from "../images/search-icon.png";
import textIcon from "../images/text.png";
import Button from "./Button";
import TextInput from "./TextInput";
import "../styles/Editor.css";
import "../styles/App.css";

const EditorPicker = (props) => {
  const { handleClick } = props;
  const components = [
    {
      key: "text",
      icon: textIcon,
      heading: "Text Input",
      innerText: "Supports Markdown or HTML",
    },
    {
      key: "button",
      icon: buttonIcon,
      heading: "Button",
      innerText: "Trigger actions like run queries, export data etc.",
    },
    {
      key: "dropdown",
      icon: dropdownIcon,
      heading: "Dropdown",
      innerText: "Select from a set of options, with a dropdown",
    },
    {
      key: "table",
      icon: tableIcon,
      heading: "Table",
      innerText: "Display tabular data with pagination",
    },
  ];
  const [filteredComponents, setFilteredComponents] = useState(components);
  const handleSearch = (e) => {
    let currValue = e.target.value;
    if (currValue === "") return setFilteredComponents(components);

    // filter components list based on search query
    const filteredComponents = components.filter((component) =>
      component.heading.toLowerCase().includes(currValue.toLowerCase())
    );
    setFilteredComponents(filteredComponents);
  };

  return (
    <div className="editor-picker">
      <div className="w-69">
        <div className="flex items-center justify-center w-9 h-9 bg-transparent absolute top-30">
          <img className="p-2" src={searchIcon} alt="icon" />
        </div>
        <TextInput
          placeholder="Search Components"
          handleSearch={handleSearch}
        />
      </div>
      <h4 className="text-left text-sm text-slate-600">Components</h4>
      {filteredComponents.map((component, index) => (
        <Button
          key={index}
          {...component}
          onClick={() => {
            handleClick(component);
          }}
        />
      ))}
    </div>
  );
};

export default EditorPicker;
