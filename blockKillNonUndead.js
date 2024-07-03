var kill = true
var types = ["slime", "spider", "enderman", "creeper", "witch", "pig", "cow", "sheep", "chicken", "horse", "donkey"]

function interact(e){
    kill = !kill 
    e.block.world.broadcast("Removing mobs is now: " + kill)
}

function tick(e){
    function tpToVoid(type){
        var command = "/tp @e[type=" + type + "] ^0 ^-200 ^0"
        e.block.executeCommand(command)
        command = "/kill [@e][type=" + type + "]"
        e.block.executeCommand(command)
    }

    if(kill){
        types.forEach(tpToVoid)
    }
}