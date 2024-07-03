function ctl(r, g, b){
    return r * 65536 + g * 256 + b
}    

function init(e){
    var colour = ctl(128, 66, 255)
    e.item.setCustomName("Randomiser")
    e.item.setDurabilityShow(false)
    e.item.setMaxStackSize(1)
    e.item.setTexture("minecraft:stick")
    e.item.setColor(colour)
}

var directions = ["north", "south", "east", "west"]

var palette = ["stone_brick_stairs", 
                "mossy_stone_brick_stairs", 
                "absentbydesign:stairs_bricks_cracked"]

function random(max){
    return Math.floor(Math.random() * max)
}

function interact(e){
    if(e.type == 2){
            var blockz = palette[random(palette.length)] + "[facing=" + directions[random(directions.length)] + "]"
        var command = [
        "/setblock",
        e.target.pos.getX(),
        e.target.pos.getY(),
        e.target.pos.getZ(),
        blockz
    ].join(" ")
    
        e.API.executeCommand(e.player.getWorld(), command)
    }
}