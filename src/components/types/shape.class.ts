export class Shape {
  id = Date.now();
  width = 200;
  height = 200;
  xPos = 0;
  yPos = 0;
  zIndex = 0;
  backgroundColor = '#000000';

  constructor(
    width: number, 
    height: number, 
    xPos: number, 
    yPos: number, 
    zIndex: number,
  ) {
    this.width = width;
    this.height = height;
    this.xPos = xPos;
    this.yPos = yPos;
    this.zIndex = zIndex;
    this.backgroundColor = this.getRandomColor();
  }

  moveShape(xPos: number, yPos: number) {
    this.xPos = xPos >= 0 ? xPos : 0;
    this.yPos = yPos >= 0 ? yPos : 0;
  }

  getRandomColor() {
    return `hsl(
      ${Math.floor(Math.random() * 360)}, 
      50%,
      80%
    `;
  }
}


