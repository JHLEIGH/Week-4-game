
$(document).ready(function () {
    var wins = 0,
        losses = 0,
        newGame,
        score,
        totScore,
        targetNo,
        blueNo,
        greenNo,
        RedNo,
        YellowNo;
    
    initialize_game();
    // console.log("TargetNo: "+targetNo );
    // console.log("Blue #: "+blueNo );
    // console.log("Green #: "+greenNo );
    // console.log("Red #: "+RedNo );
    // console.log("Yellow #: "+YellowNo );

    $("#redGem").click(function () {
        calc_print(redNo);
        alert("Red Gem: " + );
    });

    $("#blueGem").click(function () {
        alert("Blue Gem: ");
    });

    $("#greenGem").click(function () {
        alert("Green Gem: ");
    });

    $("#yellowGem").click(function () {
        alert("Yellow Gem: ");
    });

    function initialize_game(){
        newGame = false;
        score = 0;
        totScore = 0;
        targetNo = Math.floor(Math.random() * 101 ), 19;
        blueNo = Math.floor(Math.random() * 11 ), 1;
        greenNo = Math.floor(Math.random() * 11 ), 1;
        redNo = Math.floor(Math.random() * 11 ), 1;
        yellowNo = Math.floor(Math.random() * 11 ), 1;
        $("#randomNo").html(targetNo);
        $("#lossesScore").html("Losses: " + losses);
        $("#winsScore").html("Wins: " + wins);
        $("#scoreTotal").html(totScore);
    }

    function calc_print(score) {

        if (totScore > targetNo) {
            losses++;
            $("#lossesScore").html("Losses: " + losses);
            newGame = true;
        } 
        else {
            if (totScore === targetNo) {
                wins++;
                $("#winsScore").html("Wins: " + wins);
                newGame = true;
            }
            else {
                totScore = totalScore + score;
            }
        }

        if (newGame === true) {
            
        }

    }
});
  