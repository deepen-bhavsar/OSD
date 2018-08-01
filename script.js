$(document).ready(function(){
    $("#knob").click(function(){
        $("#upper").animate({top:"-=50%"},1500,"linear");
        $("#lower").animate({top:"+=50%"},1500,"linear");
        $("#knob").hide();
        $("#shelf-container").show();
    });
});