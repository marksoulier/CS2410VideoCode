
class Animatable {
  update(deltaT) {}

  render(ctx) {}

  setAnimation(animation) {
    this.animation = animation;
  }
}

class Ball extends Animatable {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.velocity = 0;
    this.totalTime = 0;
  }

  update(deltaT) {
    this.totalTime += deltaT;
    this.velocity += (deltaT * 9.8 * 5);
    this.y += this.velocity;
    if (this.y + 25 >= this.animation.height) {
      this.y = this.animation.height - 25;
      this.velocity = (this.velocity * -1) + 5;
    }
    if (this.totalTime > 5) {
      this.animation.removeAnimatable(this);
    }
  }

  render(ctx) {
    ctx.beginPath()
    ctx.fillStyle = "#FF1010";
    ctx.arc(this.x, this.y, 25, 0, Math.PI * 2);
    ctx.fill();
  }
}

class Animation {
  constructor(ctx, width, height) {
    this.animatables = [];
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.lastUpdate = null;
  }

  addAnimatable(animatable) {
    this.animatables.push(animatable);
    animatable.setAnimation(this);
  }

  removeAnimatable(animatable) {
    this.animatables.splice(this.animatables.indexOf(animatable), 1);
  }

  start() {
    requestAnimationFrame((timestamp) => this.update(timestamp))
  }

  update(timestamp) {
    // this only happens on the first frame
    if (this.lastUpdate === null) {
      this.lastUpdate = timestamp;
    }
    //compute amount of time since last update
    const deltaT = (timestamp - this.lastUpdate) / 1000; // convert to seconds

    // update last update
    this.lastUpdate = timestamp;

    // update each objects attributes over time
    this.animatables.forEach((animatable) => {
      animatable.update(deltaT);
    });

    // clear the canvas for redrawing
    this.ctx.clearRect(0, 0, this.width, this.height);

    // redraw each object
    this.animatables.forEach((animatable) => {
      this.ctx.save();
      animatable.render(this.ctx);
      this.ctx.restore();
    });

    // recursively request the next frame
    requestAnimationFrame((ts) => this.update(ts));
  }
}

// get canvas and start animation
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const animation = new Animation(ctx, canvas.clientWidth, canvas.clientHeight);
animation.start();


// create ball when user clicks on the canvas!
canvas.addEventListener("mousedown", (e) => {
  const ball = new Ball(e.offsetX, e.offsetY);
  animation.addAnimatable(ball);
});

