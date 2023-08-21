import React, { useState, useEffect } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import EditorPicker from "./components/EditorPicker";
import EditorCanvas from "./components/EditorCanvas";
import { update, resize } from "./redux/cords";
import { useDispatch } from "react-redux";

const App = () => {
  const [renderedComponent, setRenderedComponent] = useState([]);
  const [componentsData, setComponentsData] = useState([]);
  const dispatch = useDispatch();
  const options = {
    border: "2px solid black",
    background: "white",
    padding: "15px",
  };

  useEffect(() => {
    const components = localStorage.getItem("components");
    if (components && components.length > 0) {
      setComponentsData(JSON.parse(components));
      dispatch(update(JSON.parse(components)));
    }
  }, []);

  useEffect(() => {
    const components = JSON.parse(localStorage.getItem("components"));
    // resize observer on editor canvas

    if (components && components.length > 0) {
      dispatch(update(components));
    }
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].borderBoxSize[0].inlineSize;

      dispatch(resize(width));
    });
    const editorCanvas = document.querySelector(".editor-canvas");
    resizeObserver.observe(editorCanvas);

    return () => {
      resizeObserver.unobserve(editorCanvas);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("components", JSON.stringify(componentsData));
    dispatch(update(componentsData));
  }, [componentsData]);

  const handleClick = (component, componentsData) => {
    switch (component.key) {
      case "text":
        let textElementId = Date.now();
        setComponentsData([
          ...componentsData,
          {
            type: "text",
            options: { ...options, width: "250px" },
            placeholder: "You just rendered a Input component",
            id: textElementId,
            x: 0,
            y: 0,
          },
        ]);
        break;
      case "button":
        let buttonElementId = Date.now();
        const btnOptions = {
          ...options,
          background: "#007bff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          width: "120px",
          margin: 0,
          display: "block",
        };

        setComponentsData([
          ...componentsData,
          {
            type: "button",
            heading: "Click Me!!",
            options: btnOptions,
            id: buttonElementId,
            x: 0,
            y: 0,
          },
        ]);
        break;
      case "dropdown":
        let dropdownElementId = Date.now();
        const dropdownOptions = {
          ...options,
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          color: "#333",
          appearance: "none",
          outline: "none",
          cursor: "pointer",
          width: "220px",
        };
        setComponentsData([
          ...componentsData,
          {
            type: "dropdown",
            options: dropdownOptions,
            id: dropdownElementId,
            x: 0,
            y: 0,
          },
        ]);
        break;
      case "table":
        let tableElementId = Date.now();
        setComponentsData([
          ...componentsData,
          {
            type: "table",
            options: { ...options, width: "500px" },
            id: tableElementId,
            x: 0,
            y: 0,
          },
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
        <EditorCanvas />
      </div>
      <EditorPicker
        handleClick={handleClick}
        setComponentsData={setComponentsData}
      />
    </div>
  );
};

export default App;
