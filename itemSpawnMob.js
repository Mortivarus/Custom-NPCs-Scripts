function ctl(r, g, b){
        return r * 65536 + g * 256 + b
    }
    
function init(e){
        var colour = ctl(255, 255, 255)
        e.item.setCustomName("Spawn Mob")
        e.item.setDurabilityShow(false)
        e.item.setMaxStackSize(1)
        e.item.setTexture("minecraft:stick")
        e.item.setColor(colour)
    }
    
function interact(e){
    if(e.type == 2){
        var mob = e.player.world.createEntity('minecraft:zombie')
        mob.setX(e.target.getX())
        mob.setY(e.target.getY())
        mob.setZ(e.target.getZ())
        mob.setMotionY(0.5)
        mob.getInventory().setArmor(3, "minecraft:stone_button")

        var nbt = mob.getEntityNbt()
        var pNBT = e.player.getEntityNbt()
        nbt.setList('Rotation', pNBT.getList('Rotation', 5))
        mob.setEntityNbt(nbt)
        mob.spawn()
        //e.player.message(pNBT.getList('Rotation', 5))
        
    }
  }
 
