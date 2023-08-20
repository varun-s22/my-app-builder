import React, { useState } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import EditorPicker from "./components/EditorPicker";
import EditorCanvas from "./components/EditorCanvas";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import DropDown from "./components/DropDown";
import Table from "./components/Table";
import Draggable from "react-draggable";

// You can split your components

const App = () => {
  const [middleX, setMiddleX] = useState(0);
  const [middleY, setMiddleY] = useState(0);
  const [renderedComponent, setRenderedComponent] = useState([]);
  const options = {
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
            cursor="grab"
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
    <div className="App">
      <div className="editor">
        <Header />
        <EditorCanvas
          renderedComponent={renderedComponent}
          helper={{ setMiddleX, setMiddleY }}
        />
      </div>
      <EditorPicker handleClick={handleClick} />
    </div>
  );
};

export default App;
