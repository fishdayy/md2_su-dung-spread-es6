class Circle {
    constructor(color, radius) {
        this.color = "green";
        this.radius = 20;
        this.color = color;
        this.radius = radius;
    }
}
let circleList = [];
circleList.push(new Circle("yellow", 10));
circleList.push(new Circle("green", 15));
circleList.push(new Circle("blue", 20));
function showCircle(circle) {
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
}
circleList.forEach(showCircle);
//# sourceMappingURL=qldsCircle.js.map