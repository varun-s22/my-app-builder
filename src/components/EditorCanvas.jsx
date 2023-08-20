import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import "../styles/Editor.css";
import "../styles/App.css";

const EditorCanvas = (props) => {
  const canva = useRef(null);
  const dragDropHeading = useRef(null);
  const { renderedComponent } = props;
  const [canvas, setCanvas] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });

  useEffect(() => {
    const canvaElement = canva.current;
    console.dir(canvaElement);
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
      <h1 className="editor-canva-placeholder font-bold" ref={dragDropHeading}>
        Drag & drop the components here.
      </h1>
      {renderedComponent.map((component) => (
        <Draggable
          defaultPosition={{ x: 0, y: 0 }}
          bounds={{
            top: canvas.top - 420,
            left: canvas.left,
            right: canvas.right - component.props.width,
          }}
          grid={[25, 25]}
          handle=".handle"
          onStop={(e, data) => {
            // remove polka dot background on canva when dragging stops
            canva.current.classList.remove("dragging");
            dragDropHeading.current.classList.remove("hidden");
          }}
          onDrag={(e, data) => {
            // apply polka dot background on canva when dragging
            canva.current.classList.add("dragging");
            dragDropHeading.current.classList.add("hidden");
          }}
        >
          <div className="handle">{component}</div>
        </Draggable>
      ))}
    </div>
  );
};

export default EditorCanvas;
