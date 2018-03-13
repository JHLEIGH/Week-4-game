
$(document).ready(function () {
    var wins = 0,
        losses = 0,
        newGame,
        score,
        totScore,
        targetNo,
        blueNo,
        greenNo,
        redNo,
        yellowNo;
    
    initialize_game();

    $("#redGem").click(function () {
        calc_print(redNo);
    });

    $("#blueGem").click(function () {
        calc_print(blueNo);
    });

    $("#greenGem").click(function () {
        calc_print(greenNo);
    });

    $("#yellowGem").click(function () {
        calc_print(yellowNo);
    });

    function initialize_game(){
        newGame = false;
        score = 0;
        totScore = 0;
        targetNo = Math.floor(Math.random() * 102 ) + 19;
        blueNo = Math.floor(Math.random() * 12 ) + 1;
        greenNo = Math.floor(Math.random() * 12 ) + 1;
        redNo = Math.floor(Math.random() * 12 ) + 1;
        yellowNo = Math.floor(Math.random() * 12 ) + 1;
        $("#randomNo").html(targetNo);
        $("#lossesScore").html("Losses: " + losses);
        $("#winsScore").html("Wins: " + wins);
        $("#scoreTotal").html(totScore);
    };

    function calc_print(score) {

        totScore = totScore + score;
        $("#scoreTotal").html(totScore);

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
        }

        if (newGame === true) {
            initialize_game();
        }

    };
    
});
  