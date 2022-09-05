var Fan = /** @class */ (function () {
    function Fan(speed, status, radius, color) {
        if (status === void 0) { status = false; }
        if (radius === void 0) { radius = 5; }
        if (color === void 0) { color = 'blue'; }
        this.speed = speed;
        this.status = status;
        this.radius = radius;
        this.color = color;
    }
    Fan.prototype.speedFan = function () {
        if (this.speed == 2) {
            return "MEDIUM";
        }
        else if (this.speed == 3) {
            return "FAST";
        }
        else {
            return "SLOW";
        }
    };
    Fan.prototype.toString = function () {
        if (this.status == true) {
            return this.speedFan() + ',' + this.color + "," + this.radius + "fan is on";
        }
        else {
            return "fan is off";
        }
    };
    return Fan;
}());
var fan = new Fan(2, true, 8, 'black');
console.log(fan.toString());
