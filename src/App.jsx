import React, { useState } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import EditorPicker from "./components/EditorPicker";
import EditorCanvas from "./components/EditorCanvas";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import DropDown from "./components/DropDown";
import Table from "./components/Table";

// You can split your components

const App = () => {
  const [middleX, setMiddleX] = useState(0);
  const [middleY, setMiddleY] = useState(0);
  const [renderedComponent, setRenderedComponent] = useState([]);
  const options = {
    position: "absolute",
    border: "2px solid black",
    background: "white",
    padding: "15px",
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
          <Button
            options={{
              ...options,
              background: "#007bff",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
            }}
            heading="Click Me!!"
            width={150}
          />,
        ]);
        break;
      case "dropdown":
        setRenderedComponent([
          ...renderedComponent,
          <DropDown
            options={{
              ...options,
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              color: "#333",
              appearance: "none",
              outline: "none",
              cursor: "pointer",
            }}
            width={250}
          />,
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
