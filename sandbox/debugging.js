const PI = 3.14;
let area = 0;
function circleArea(radius){
    area = radius * radius * PI;
    return area;
}
area = circleArea(3);
console.log("Area:", area);