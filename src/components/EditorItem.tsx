import { Shape } from './types/shape.class';

interface EditorItemProps {
  item: Shape;
  removeItem: (id: number) => void;
}

const EditorItem = (props: EditorItemProps) => {

  return (
    <div 
      className="editor-item"
      style={{
        top: `${props.item.yPos}px`,
        left: `${props.item.xPos}px`,
        width: `${props.item.width}px`,
        height: `${props.item.height}px`,
        backgroundColor: `${props.item.backgroundColor}`,
        zIndex: `${props.item.zIndex}`,
      }}
    >
      <span 
        className="delete-button"
        onClick={() => props.removeItem(props.item.id)}
      >
        ❌
      </span>
    </div>
  );
}

export default EditorItem;
