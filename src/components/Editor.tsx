import React, { useState } from 'react';
import EditorItem from './EditorItem';
import { Shape } from './types/shape.class';

function Editor() {
  const [items, setItems] = useState<Shape[]>([]);

  const [draggedItem, setDraggedItem] = useState<Shape | undefined>();
  const [initialItemPos, setInitialItemPos] = useState<{x: number, y: number}>({x: 0, y: 0});
  const [initialCursorPos, setInitialCursorPos] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [cursorDelta, setCursorDelta] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  const onMouseDown = (event: React.MouseEvent, item: Shape) => {
    setDraggedItem(item);
    setInitialItemPos({ x: item.xPos, y: item.yPos })
    setInitialCursorPos({ x: event.clientX, y: event.clientY });
  }

  const onMouseUp = () => {
    setDraggedItem(undefined);
  }

  const onMouseMove = (event: React.MouseEvent) => {
    if (!draggedItem) return;

    setCursorDelta({ 
      x: event.clientX - initialCursorPos.x, 
      y: event.clientY - initialCursorPos.y 
    })

    draggedItem.moveShape(
      initialItemPos.x + cursorDelta.x,
      initialItemPos.y + cursorDelta.y,
    )
  }

  const addItem = () => {
    const newItem = new Shape(200, 200, items.length * 20, items.length * 20, items.length);
    setItems([...items, newItem]);
  }

  return (
    <>
      <div>
        <button onClick={() => addItem()}> Add Item </button>
      </div>
      <div 
        className="canvas"
        onMouseMove={(event) => onMouseMove(event)}
        onMouseUp={() => onMouseUp()}
      >
        { items.map((item) => 
          <div 
            key={item.id}
            onMouseDown={(event) => onMouseDown(event, item)}
          >
            <EditorItem item={item}/>
          </div>
        )}
      </div>
    </>
  );
}

export default Editor;
