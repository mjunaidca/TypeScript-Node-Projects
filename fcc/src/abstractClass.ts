abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia():void 
    getReelTime(){
        //some complex calc
        return 8
    }
}


class Instagra extends TakePhoto{
    constructor(
        public cametaMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }


    getSepia(){
        console.log("Sepia")
    }

}

const hc = new Instagra("Auto", "Normal", 3)
