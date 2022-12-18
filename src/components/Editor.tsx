import { useState } from 'react';
import Canvas from './Canvas';
import Toolbar from './Toolbar';
import { Shape } from './types/shape.class';

function Editor() {
  const [items, setItems] = useState<Shape[]>([]);

  return (
    <>
      <Toolbar 
        items={items}
        setItems={setItems}
      />
      <Canvas 
        items={items}
        setItems={setItems}
      />
    </>
  );
}

export default Editor;
