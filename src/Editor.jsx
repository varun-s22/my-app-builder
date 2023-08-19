import React, { useState } from "react";
import "./styles/Editor.css";
import "./styles/App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import buttonIcon from "./images/button.png";
import dropdownIcon from "./images/dropdown.png";
import tableIcon from "./images/table.png";
import searchIcon from "./images/search-icon.png";
import textIcon from "./images/text.png";

const EditorCanvas = (props) => {
  return (
    <div className="editor-canvas">
      <Header />
      <div className="editor-canva">
        <h1 className="editor-canva-placeholder font-bold">
          {" "}
          Drag & drop the components here.
        </h1>{" "}
      </div>
    </div>
  );
};

const EditorPicker = (props) => {
  const components = [
    {
      icon: textIcon,
      heading: "Text Input",
      innerText: "Supports Markdown or HTML",
    },
    {
      icon: buttonIcon,
      heading: "Button",
      innerText: "Trigger actions like run queries, export data etc.",
    },
    {
      icon: dropdownIcon,
      heading: "Dropdown",
      innerText: "Select from a set of options, with a dropdown",
    },
    {
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
        <input
          type="text"
          placeholder="Search Components"
          className="w-full px-9 py-2 border border-gray-300 rounded-md text-sm mb-4"
          onChange={handleSearch}
        />
      </div>
      <h4 className="text-left text-sm text-slate-600">Components</h4>
      {filteredComponents.map((component, index) => (
        <Button key={index} {...component} />
      ))}
    </div>
  );
};

const Editor = (props) => {
  return (
    <div className="editor">
      <EditorCanvas />
      <EditorPicker />
    </div>
  );
};

export default Editor;
