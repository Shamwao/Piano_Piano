//highlighter
$(document).ready(function(){
    $('.white-keys').mouseenter(function(){
        $(this).css('background-color', 'red')
    })
    $('.white-keys').mouseleave(function(){
        $(this).css('background-color', 'white')
    })
})
$(document).ready(function(){
    $('.black-keys').mouseenter(function(){
        $(this).css('background-color', 'red')
    })
    $('.black-keys').mouseleave(function(){
        $(this).css('background-color', 'black')
    })
})



//audio

$(document).ready(function(){
    $(document).mousedown(function(event){
        let audio = new Audio("tones/piano-mp3_"+event.target.id+".mp3")
        audio.play()
        $(document).mouseup(function(){
            audioFade()
        })
    })
})

function audioFade(){
    setInterval(audio.volume()-.3, 100)
}