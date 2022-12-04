"use strict";
function detectType(val) {
    if (typeof val == "string") {
        val.toLowerCase();
    }
    return val;
}
function provideId(id) {
    if (!id) {
        console.log('Please provide an id');
        return;
    }
    id.toLowerCase();
}
function getTrueShape(shape) {
    if (shape.kind == "circle") {
        return Math.PI * shape.radius ** 2;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
    const _exhaustiveCheck = shape;
    return _exhaustiveCheck;
}
