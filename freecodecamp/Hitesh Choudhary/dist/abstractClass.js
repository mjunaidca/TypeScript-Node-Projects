"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calc
        return 8;
    }
}
class Instagra extends TakePhoto {
    constructor(cametaMode, filter, burst) {
        super(cameraMode, filter);
        this.cametaMode = cametaMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const hc = new Instagra("Auto", "Normal", 3);
