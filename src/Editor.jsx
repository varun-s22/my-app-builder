import React from "react";
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
  return (
    <div className="editor-picker">
      <div class="w-69">
        <div className="flex items-center justify-center w-9 h-9 bg-transparent absolute top-10px">
          <img className="p-2" src={searchIcon} alt="icon" />
        </div>
        <input
          type="text"
          placeholder="      Search Components"
          class="w-full px-3 py-2 border border-gray-300 rounded-md text-xs mb-4"
        />
      </div>
      <h4 className="text-left text-sm">Components</h4>
      <Button
        icon={textIcon}
        heading="Text Input"
        innerText="Supports Markdown or HTML"
      />
      <Button
        icon={buttonIcon}
        heading="Button"
        innerText="Trigger actions like run queries, export data etc."
      />
      <Button
        icon={dropdownIcon}
        heading="Dropdown"
        innerText="Select from a set of options, with a dropdown"
      />
      <Button
        icon={tableIcon}
        heading="Table"
        innerText="Display tabular data with pagination"
      />
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
