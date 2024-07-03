//Toggles night-vision when interacted with the block
function interact(e){
    var effect = e.player.getPotionEffect(16)
    if(effect > -1){
        e.player.clearPotionEffects()
    } else {
        e.player.addPotionEffect(16, 9999999, 0, false)
    }
}