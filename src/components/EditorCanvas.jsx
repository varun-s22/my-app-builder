import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import "../styles/Editor.css";
import "../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/cords";
import Button from "./Button";
import TextInput from "./TextInput";
import DropDown from "./DropDown";
import Table from "./Table";

function componentMapping({ type, ...props }) {
  switch (type) {
    case "text":
      return <TextInput {...props} />;
    case "button":
      return <Button {...props} />;
    case "dropdown":
      return <DropDown {...props} />;
    case "table":
      return <Table {...props} />;
    default:
      return <TextInput {...props} />;
  }
}

const EditorCanvas = (props) => {
  const canva = useRef(null);
  const dragDropHeading = useRef(null);
  const componentsData = useSelector((state) => {
    return state.cords.cords;
  });
  useEffect(() => {
    if (componentsData.length > 0) {
      localStorage.setItem("components", JSON.stringify(componentsData));
    }
  }, [componentsData]);

  const dispatch = useDispatch();
  const [canvas, setCanvas] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });

  useEffect(() => {
    const canvaElement = canva.current;
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = canvaElement;
    setCanvas({
      top: offsetTop,
      left: offsetLeft,
      bottom: offsetHeight,
      right: offsetWidth,
    });
  }, []);
  return (
    <div className="editor-canvas" ref={canva}>
      {componentsData.length > 0 ? (
        componentsData.map((componentData) => (
          <Draggable
            defaultPosition={{ x: componentData.x, y: componentData.y }}
            bounds="parent"
            grid={[25, 25]}
            handle=".handle"
            onStop={(e, data) => {
              // remove polka dot background on canva when dragging stops
              canva.current.classList.remove("dragging");

              // update x,y cordinates for the component (store updated array in redux)
              const updatedData = {
                ...componentData,
                x: data.x,
                y: data.y,
              };

              const updatedComponentsData = componentsData.map((item) =>
                item.id === updatedData.id ? updatedData : item
              );

              dispatch(update(updatedComponentsData));
              localStorage.setItem(
                "components",
                JSON.stringify(updatedComponentsData)
              );
            }}
            onDrag={(e, data) => {
              // add dragging class to canva when dragging starts
              canva.current.classList.add("dragging");

              // Calculate the snapped x and y positions based on the grid
              const snappedX = Math.round(data.x / 25) * 25;
              const snappedY = Math.round(data.y / 25) * 25;

              // Update the draggable data with the snapped positions
              data.x = snappedX;
              data.y = snappedY;
            }}
          >
            <div className="handle" style={{ opacity: 1 }}>
              {componentMapping(componentData)}
            </div>
          </Draggable>
        ))
      ) : (
        <h1
          className="editor-canva-placeholder font-bold"
          ref={dragDropHeading}
        >
          Drag & drop the components here.
        </h1>
      )}
    </div>
  );
};

export default EditorCanvas;
