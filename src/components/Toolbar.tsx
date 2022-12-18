import { Shape } from './types/shape.class';

interface ToolbarProps {
  items: Shape[];
  setItems: (items: Shape[]) => void;
}

const Toolbar = (props: ToolbarProps) => {
  const addItem = () => {
    const newItemPosOffset = props.items.length * 20;
    const newItem = new Shape(200, 200, newItemPosOffset);
    props.setItems([...props.items, newItem]);
  }

  const resetItems = () => {
    props.setItems([]);
  }

  return (
    <div className="toolbar">
      <button onClick={() => addItem()}> Add Item </button>
      <button onClick={() => resetItems()}> Reset </button>
    </div>
  );
}

export default Toolbar;
