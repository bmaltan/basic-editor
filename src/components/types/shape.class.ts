export class Shape {
  id = Date.now();
  width = 200;
  height = 200;
  xPos = 0;
  yPos = 0;
  backgroundColor = '#000000';

  constructor(
    width: number, 
    height: number, 
    positionOffset: number, 
  ) {
    this.width = width;
    this.height = height;
    this.xPos = positionOffset;
    this.yPos = positionOffset;
    this.backgroundColor = this.getRandomColor();
  }

  move(pos: {x: number, y: number}) {
    this.xPos = pos.x;
    this.yPos = pos.y;
  }

  getRandomColor() {
    return `hsl(
      ${Math.floor(Math.random() * 360)}, 
      50%,
      80%
    `;
  }
}


