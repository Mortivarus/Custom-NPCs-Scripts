function ctl(r, g, b){
    return r * 65536 + g * 256 + b
}    

function init(e){
    var colour = ctl(255, 0, 255)
    e.item.setCustomName("Follower Wand")
    e.item.setDurabilityShow(false)
    e.item.setMaxStackSize(1)
    e.item.setTexture("minecraft:stick")
    e.item.setColor(colour)
}

function attack(e){
    if(e.type == 1){
        var followers = e.player.world.getScoreboard().getTeam(e.player.name).getPlayers()
        for(var i in followers){
            if(followers[i] != e.player.name){
                var follower = e.player.world.getEntity(followers[i])
                follower.setAttackTarget(e.target)
            }
        }
    }
}

function interact(e){

// 0=air, 1=entity, 2=block
if(e.type == 1){
    var data = e.target.getStoreddata() 
    var scoreboard = e.target.world.getScoreboard()
    //Entity has an owner but it's not player
    if(data.has('owner') && data.get('owner' != e.player.name)){
        return e.player.message("You cannot control a Minion owned by someone else.")
    
    //Entity has no owner
    } else if(!data.has('owner')){
        data.put("owner", e.player.name)
        data.put("following", "true")
         e.target.setName(e.target.getUUID())
         e.player.message(e.player.name)
         scoreboard.getTeam(e.player.name).addPlayer(e.target.getUUID())
         scoreboard.getTeam("followers").addPlayer(e.target.getUUID())
         var nbt = e.target.getEntityNbt()
         nbt.setByte("PersistenceRequired", true)
         e.target.setEntityNbt(nbt)
         return e.player.message("Minion Tamed")
    //Entity is owned by player, toggle 'following'
    } else {
        var follow = JSON.parse(data.get('following'))
        follow = !follow
        if(follow){
            scoreboard.getTeam("followers").addPlayer(e.target.getUUID())
        } else {
            scoreboard.getTeam("followers").removePlayer(e.target.getUUID())
        }
        follow += ""
        data.put("following", follow)
        
        return e.player.message("Minion Following: " +  follow)
    }
}

//Spawn animation effect and move all followers to indicated location
if(e.type == 2){
        var followers = e.player.world.scoreboard.getTeam(e.player.name).getPlayers()
        var location = e.target.pos.up(1)
        e.target.world.spawnParticle("witch",
         location.getX(),
         location.getY(),
         location.getZ(),
         0, 2, 0, 2, 40)
         e.target.world.playSoundAt(e.target.pos, "entity.evoker.cast_spell", 1, 1)    
        for(var i in followers){
           e.player.message(followers[i])
        }
    }

}

