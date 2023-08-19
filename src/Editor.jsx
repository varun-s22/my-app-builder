import React, { forwardRef, useEffect, useRef, useState } from "react";
import buttonIcon from "./images/button.png";
import dropdownIcon from "./images/dropdown.png";
import tableIcon from "./images/table.png";
import searchIcon from "./images/search-icon.png";
import textIcon from "./images/text.png";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import Header from "./components/Header";
import DropDown from "./components/DropDown";
import Table from "./components/Table";
import "./styles/Editor.css";
import "./styles/App.css";

const EditorCanvas = forwardRef((props, ref) => {
  const canva = ref;
  const { helper } = props;
  const { setMiddleX, setMiddleY } = helper;
  useEffect(() => {
    const canvaElement = canva.current;
    const canvaElementTop = canvaElement.offsetTop;
    const canvaElementLeft = canvaElement.offsetLeft;
    const canvaElementBottom = canvaElementTop + canvaElement.offsetHeight;
    const canvaElementRight = canvaElementLeft + canvaElement.offsetWidth;
    const middleX = (canvaElementLeft + canvaElementRight) / 2;
    const middleY = (canvaElementTop + canvaElementBottom) / 2;
    setMiddleX(middleX);
    setMiddleY(middleY);
  }, []);
  return (
    <div className="editor-canvas">
      <Header />
      <div className="editor-canva" ref={canva}>
        <h1 className="editor-canva-placeholder font-bold">
          {" "}
          Drag & drop the components here.
        </h1>{" "}
      </div>
    </div>
  );
});

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

const Editor = (props) => {
  const canva = useRef(null);
  const [middleX, setMiddleX] = useState(0);
  const [middleY, setMiddleY] = useState(0);
  const [renderedComponent, setRenderedComponent] = useState([]);
  const options = {
    left: middleX + "px",
    top: middleY + "px",
    position: "absolute",
    outline: "indigo solid 2px",
    background: "white",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "3px 5px 10px 2px rgba(0,0,0,0.75)",
  };

  const handleClick = (component) => {
    switch (component.key) {
      case "text":
        setRenderedComponent([
          ...renderedComponent,
          <TextInput
            options={options}
            width={400}
            placeholder="You just rendered a Input component"
          />,
        ]);
        break;
      case "button":
        setRenderedComponent([
          ...renderedComponent,
          <Button options={options} heading="Click Me!!" width={150} />,
        ]);
        break;
      case "dropdown":
        setRenderedComponent([
          ...renderedComponent,
          <DropDown options={options} width={200} />,
        ]);
        break;
      case "table":
        setRenderedComponent([
          ...renderedComponent,
          <Table options={options} width={600} />,
        ]);
        break;
      default:
        setRenderedComponent(null);
        break;
    }
  };
  return (
    <div className="editor">
      <EditorCanvas ref={canva} helper={{ setMiddleX, setMiddleY }} />
      <EditorPicker handleClick={handleClick} />
      {renderedComponent.map((component) => component)}
    </div>
  );
};

export default Editor;
