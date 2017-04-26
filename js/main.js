var piano = new Wad({
    source : 'square', 
    env : {
        attack : .01, 
        decay : .005, 
        sustain : .2, 
        hold : .015, 
        release : .3
    }, 
    filter : {
        type : 'lowpass', 
        frequency : 1200, 
        q : 8.5, 
        env : {
            attack : .2, 
            frequency : 600
        }
    }
})



$( "button" ).on( "click", function() {
var noteId = $(this).text();
piano.play({ pitch : noteId + "4" })
});