class StopWatch{
    constructor(startTime,endTime) {
        this.startTime = startTime
        this.endTime = endTime
    }

    start(){
        return this.startTime = Date.now()
    }

    stop(){
        return this.endTime = Date.now()
    }

    getElapsedTime(){
        // console.log(this.start(), this.stop())
        return (this.start() - this.stop())
    }
}

let stopWatch = new StopWatch(100000,0)
stopWatch.start()
stopWatch.stop();
console.log(stopWatch.getElapsedTime())
