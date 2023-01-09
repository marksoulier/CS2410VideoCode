class Drawable {
  draw(ctx) {}
}

class Drawing {
  constructor(ctx, drawables = []) {
    this.ctx = ctx;
    this.drawables = drawables
  }

  draw() {
    this.drawables.forEach((drawable) => {
      ctx.save();
      drawable.draw(ctx);
      ctx.restore();
    });
  }
}

class Square extends Drawable {
  constructor(x, y, size, color) {
    super();
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const square1 = new Square(100, 100, 100, "#0000FF");
const square2 = new Square(300, 300, 100, "#FF0000");

const drawing = new Drawing(ctx, [square1, square2]);

drawing.draw();