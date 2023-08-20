import React, { forwardRef, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import "../styles/Editor.css";
import "../styles/App.css";

// const EditorCanvas = () => {
//   const [renderedComponent, setRenderedComponent] = useState([]);

//   const handleAddComponent = (component) => {
//     setRenderedComponent((prevComponents) => [
//       ...prevComponents,
//       <Draggable>
//         <div style={{ position: "absolute" }}>{component}</div>
//       </Draggable>,
//     ]);
//   };

//   return (
//     <div className="editor-canvas">
//       <h1 className="editor-canva-placeholder font-bold">
//         Drag & drop the components here.
//       </h1>
//       {renderedComponent.map((component, index) => (
//         <div key={index}>{component}</div>
//       ))}
//       <button onClick={() => handleAddComponent("Component")}>
//         Add Component
//       </button>
//     </div>
//   );
// };

// export default EditorCanvas;

const EditorCanvas = (props) => {
  const canva = useRef(null);
  const dragDropHeading = useRef(null);
  const { renderedComponent, helper } = props;
  const [middleX, setMiddleX] = useState(0);
  const [middleY, setMiddleY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canvas, setCanvas] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });

  useEffect(() => {
    const canvaElement = canva.current;
    const canvaElementTop = canvaElement.offsetTop;
    const canvaElementLeft = canvaElement.offsetLeft;
    const canvaElementBottom = canvaElementTop + canvaElement.offsetHeight;
    const canvaElementRight = canvaElementLeft + canvaElement.offsetWidth;
    setCanvas({
      top: canvaElementTop,
      left: canvaElementLeft,
      bottom: canvaElementBottom,
      right: canvaElementRight,
    });
    const middleX = (canvaElementLeft + canvaElementRight) / 2;
    const middleY = (canvaElementTop + canvaElementBottom) / 2;
    setMiddleX(middleX);
    setMiddleY(middleY);
  }, []);
  return (
    <div className="editor-canvas" ref={canva}>
      <h1 className="editor-canva-placeholder font-bold" ref={dragDropHeading}>
        Drag & drop the components here.
      </h1>
      {renderedComponent.map((component) => (
        <Draggable
          defaultPosition={{ x: middleX, y: 0 }}
          bounds="parent"
          grid={[25, 25]}
          handle=".handle"
          onStop={(e, data) => {
            const node = e.target;
            // node.removeClassList("dragging");
            canva.current.classList.remove("dragging");
            dragDropHeading.current.classList.remove("hidden");
          }}
          onDrag={(e, data) => {
            // apply polka dot background on canva when dragging
            canva.current.classList.add("dragging");
            dragDropHeading.current.classList.add("hidden");
            console.dir(canva.current);
          }}
        >
          <div className="handle">{component}</div>
        </Draggable>
      ))}
    </div>
  );
};

export default EditorCanvas;
