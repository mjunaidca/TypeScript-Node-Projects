function detectType(val : number | string){
    if (typeof val == "string"){
        val.toLowerCase()
    } 
    return val 
}

function provideId(id: string | null){
    if(!id){
        console.log('Please provide an id');
        return
    }
    id.toLowerCase()
}

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    sideLength: number
}

interface Rectangle {
    kind: "rectangle",
    width: number,
    height: number
}

type Shape = Circle | Square 

function getTrueShape(shape: Shape){    
    if(shape.kind == "circle"){
        return Math.PI* shape.radius ** 2
    }
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI* shape.radius ** 2

        case "square":
            return shape.sideLength ** 2
        }

        default:
            const _exhaustiveCheck: never = shape
            return _exhaustiveCheck
}