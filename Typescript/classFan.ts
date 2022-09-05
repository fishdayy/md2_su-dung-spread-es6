class Fan{
    speed: number;
    status: boolean;
    radius: number;
    color: string;
    constructor(speed,status = false,radius = 5,color = 'blue') {
        this.speed = speed;
        this.status = status;
        this.radius = radius;
        this.color = color;
    }

    speedFan(){
        if (this.speed == 2){
            return "MEDIUM"
        }else if (this.speed == 3){
            return "FAST"
        }else {
            return "SLOW"
        }
    }

    toString(){
        if(this.status == true){
            return this.speedFan()+','+this.color+","+this.radius+","+"fan is on"
        }else {
            return "fan is off"
        }
    }
}

let fan = new Fan(2,true,8,'black');
console.log(fan.toString())