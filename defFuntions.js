//Check if value is in array
function inArray(value, array) {
    return array.indexOf(value) > -1;
}

//Convert rgb values to integer
function ctl(r, g, b){
    return r * 65536 + g * 256 + b
}

function randInt(max){
    return Math.floor(Math.random() * max)
}

function randFloat(max){
    return Math.random()*max
}