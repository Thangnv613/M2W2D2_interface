"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComparableVsCircle_1 = require("./ComparableVsCircle");
let circles = [];
circles[0] = new ComparableVsCircle_1.ComparableCircle(10);
circles[1] = new ComparableVsCircle_1.ComparableCircle(20);
circles[2] = new ComparableVsCircle_1.ComparableCircle(30);
let result = circles[1].compareTo(circles[2]);
if (result == 1) {
    console.log("The current circle is larger.");
}
else {
    console.log("The current circle is smaller.");
}
