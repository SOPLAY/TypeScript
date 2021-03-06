interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  getArea() {
    return this.width * this.height;
  }
}

const circle: Circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(2, 5);

const shapes: Shape[] = [circle, rectangle];
shapes.forEach((shape) => {
  console.log(shape.getArea());
});
