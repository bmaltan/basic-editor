import { useState } from 'react';
import { Shape } from './types/shape.class';

interface EditorItemProps {
  item: Shape;
}

const EditorItem = (props: EditorItemProps) => {

  return (
    <div 
      style={{
        position: 'absolute',
        borderRadius: '25px',
        border: '4px solid rgba(0, 0, 0, 0.25)',
        top: `${props.item.yPos}px`,
        left: `${props.item.xPos}px`,
        width: `${props.item.width}px`,
        height: `${props.item.height}px`,
        backgroundColor: `${props.item.backgroundColor}`,
        zIndex: `${props.item.zIndex}`,
      }}
    />
  );
}

export default EditorItem;


