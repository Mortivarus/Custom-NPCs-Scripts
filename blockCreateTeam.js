function init(e){
    var scoreboard = e.block.world.getScoreboard()
     if(!scoreboard.hasTeam("followers")){
        scoreboard.addTeam("followers") 
     }
}

function interact(e){
    var scoreboard = e.player.world.getScoreboard()
    if(!scoreboard.hasTeam(e.player.name)){
        scoreboard.addTeam(e.player.name)
        e.player.message("Team " + e.player.name + " created.")
    } else{ e.player.message("Team " + e.player.name + " already exists.")}
    var team = scoreboard.getTeam(e.player.name)
    team.setFriendlyFire(false)
    team.addPlayer(e.player.name)
}
var timer = 0
var players = ["Mortivarus"]
var seconds = 0.25

function tick(e){
    var followers = e.block.world.scoreboard.getTeam("followers").getPlayers()
    
    function moveToOwner(value){
            var world = e.block.getWorld()
            var scoreboard = world.getScoreboard()
            var follower = world.getEntity(value)
            var owner = follower.getStoreddata().get("owner")
            owner = world.getPlayer(follower.getStoreddata().get("owner"))
            var distance = follower.pos.distanceTo(owner.pos)
            
            if(distance >= 6){
                follower.navigateTo(
                    owner.pos.getX(), 
                    owner.pos.getY(),
                    owner.pos.getZ(),
                    2
                )
            }    
        }

    if(timer == seconds*4){
        if(followers.length > 0){
            for each (var i in followers) print(i)
        }
        //
        //e.block.world.broadcast(followers.length)
        return timer = 0
    }
    timer += 1
}
