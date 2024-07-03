function tpToVoid(block){
    var command = "/kill @e[type=!minecraft:player]"
    block.executeCommand(command)
}

function interact(e){
    tpToVoid(e.block)
}

