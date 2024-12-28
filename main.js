$(document).ready(function(){
    let elapsedTime = 0;

    function timer() {
        elapsedTime += 1
        let milliseconds = elapsedTime % 10
        let seconds = Math.floor(elapsedTime / 10) % 60
        let minutes = Math.floor(elapsedTime / 600) % 60
        let hours = Math.floor(elapsedTime / 36000) 
        
        $("span").text(`${hours}:${minutes}:${seconds}:${milliseconds}`);
    }
    
    $(".start").click(function(){
        intervalId = setInterval(timer, 100);
        $(this).prop("disabled", true)
        $(".stop").prop("disabled", false)
        $(".reset").prop("disabled", false)
    });

    $(".stop").click(function(){
        clearInterval(intervalId);
        $(".start").prop("disabled", false)
        $(".stop").prop("disabled", true)
        $(".reset").prop("disabled", false)
    });

    $(".reset").click(function(){
        elapsedTime = 0
        clearInterval(intervalId);
        $("span").text("0:0:0:0")
        $(".start").prop("disabled", false)
        $(".stop").prop("disabled", true)
        $(".reset").prop("disabled", true)
    });

    
      
    

});
  