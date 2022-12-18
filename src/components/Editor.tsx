import React, { useCallback, useEffect, useRef, useState } from 'react';
import EditorItem from './EditorItem';
import { Shape } from './types/shape.class';

function Editor() {
  const [items, setItems] = useState<Shape[]>([]);

  const [draggedItem, setDraggedItem] = useState<Shape | undefined>();
  const [initialItemPos, setInitialItemPos] = useState({x: 0, y: 0});
  const [initialCursorPos, setInitialCursorPos] = useState({ x: 0, y: 0 });
  const [moveDelta, setMoveDelta] = useState({ x: 0, y: 0 });

  const canvasRef = useRef<HTMLDivElement>(null);

  const onMouseDown = (event: React.MouseEvent, item: Shape) => {
    setDraggedItem(item);
    setInitialItemPos({ x: item.xPos, y: item.yPos })
    setInitialCursorPos({ x: event.clientX, y: event.clientY });
  }

  const onMouseMove = (event: React.MouseEvent) => {
    if (!draggedItem) return;

    setMoveDelta({
      x: event.clientX - initialCursorPos.x,
      y: event.clientY - initialCursorPos.y,
    })
  }

  const stopMove = () => {
    setDraggedItem(undefined)
    setMoveDelta({ x: 0, y: 0 })
  };

  const clampDeltas = useCallback((delta: { x: number, y: number }) => {
    if (!draggedItem || !canvasRef.current) {
      return {x: 0, y: 0};
    }
    
    const canvas = canvasRef.current as HTMLDivElement;
    const canvasRect = canvas!.getBoundingClientRect();

    const maxX = canvasRect.width - draggedItem.width;
    const maxY = canvasRect.height - draggedItem.height;

    return {
      x: Math.max(0, Math.min(delta.x, maxX)),
      y: Math.max(0, Math.min(delta.y, maxY)),
    }
  }, [draggedItem]);

  useEffect(() => {
    if (!draggedItem) return;

    const coords = clampDeltas({
      x: initialItemPos.x + moveDelta.x,
      y: initialItemPos.y + moveDelta.y,
    })

    draggedItem.move(coords);
  }, [moveDelta, draggedItem, initialItemPos, clampDeltas])

  const addItem = () => {
    const newItem = new Shape(200, 200, items.length * 20, items.length * 20, items.length);
    setItems([...items, newItem]);
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <div>
        <button onClick={() => addItem()}> Add Item </button>
      </div>
      <div
        ref={canvasRef}
        className="canvas"
        onMouseMove={(event) => onMouseMove(event)}
        onMouseUp={() => stopMove()}
        onMouseLeave={() => stopMove()}
      >
        { items.map((item) => 
          <div 
            key={item.id}
            onMouseDown={(event) => onMouseDown(event, item)}
          >
            <EditorItem 
              item={item}
              removeItem={removeItem}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Editor;
