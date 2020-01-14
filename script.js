let players = [];
let markers = ["X", "O"];
let whoseTurn = 0;
players[0] = "player1";
players[1] = "player2";

let player1_points = 1;
let player2_points = 1;

var a = document.getElementById("0");
var b = document.getElementById("1");
var c = document.getElementById("2");

var d = document.getElementById("3");
var e = document.getElementById("4");
var f = document.getElementById("5");

var g = document.getElementById("6");
var h = document.getElementById("7");
var i = document.getElementById("8");

function play(clickedDiv){
    if (clickedDiv.textContent !== "X" && clickedDiv.textContent !== "O")
    {
        if(document.getElementById("endgame_popup").style.display === "block")
        {

        }
        else{
            clickedDiv.innerText = markers[whoseTurn];
            CheckWinner();
            switchPlayer();
        }
    }
}

function switchPlayer(){
    if(whoseTurn == 0) whoseTurn = 1;
    else whoseTurn = 0;

    document.getElementById("message").innerText = "It is " + players[whoseTurn] + " 's turn"
}


function replay(){
    //ändra färg tbk
    document.getElementById("0").style.color = "black";
    document.getElementById("1").style.color = "black";
    document.getElementById("2").style.color = "black";
    document.getElementById("3").style.color = "black";
    document.getElementById("4").style.color = "black";
    document.getElementById("5").style.color = "black";
    document.getElementById("6").style.color = "black";
    document.getElementById("7").style.color = "black";
    document.getElementById("8").style.color = "black";

    // få bort popup
    document.getElementById("endgame_popup").style.display = "none"

    let arrOfTD = document.getElementsByClassName("cell");

    for(let i = 0; i < arrOfTD.length; i++){
        arrOfTD[i].innerText = "";
    }
}

//check if player X wins
function CheckWinner(){

if(a.innerText !== "" && b.innerText !== "" && c.innerText !== "" && d.innerText !== "" && e.innerText !== "" && f.innerText !== "" && g.innerText !== "" && h.innerText !== "" && i.innerText !== "")
    {
        $('#endgame_text').text ("It´s a tie!");
        document.getElementById("endgame_popup").style.display = "block";
    }

    if(a.innerText == "X" && b.innerText == "X" && c.innerText == "X"){
        document.getElementById("0").style.color = "#699686";
        document.getElementById("1").style.color = "#699686";
        document.getElementById("2").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p1').text ('Player 1: '+ player1_points);
        player1_points += 1;
    }
    
    if (d.innerText === "X" && e.innerText === "X" && f.innerText === "X") {
        document.getElementById("3").style.color = "#699686";
        document.getElementById("4").style.color = "#699686";
        document.getElementById("5").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        document.getElementById("p1").innerText="Player 1: "+player1_points;
        $('#p1').text ('Player 1:' + player1_points);
        player1_points += 1;
    }
    
    if (g.innerText === "X" && h.innerText === "X" && i.innerText === "X"){
        document.getElementById("6").style.color = "#699686";
        document.getElementById("7").style.color = "#699686";
        document.getElementById("8").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p1').text ('Player 1: ' + player1_points);
        player1_points += 1;
    }
    
    if (a.innerText === "X" && d.innerText === "X" && g.innerText === "X") {
        document.getElementById("0").style.color = "#699686";
        document.getElementById("3").style.color = "#699686";
        document.getElementById("6").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p1').text ('Player 1: ' + player1_points);
        player1_points += 1;
    }
    
    if (b.innerText === "X" && e.innerText === "X" && h.innerText === "X") {
        document.getElementById("1").style.color = "#699686";
        document.getElementById("4").style.color = "#699686";
        document.getElementById("7").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p1').text ('Player 1: ' + player1_points);
        player1_points += 1;
    }
    
    if (c.innerText === "X" && f.innerText === "X" && i.innerText === "X") {
        document.getElementById("2").style.color = "#699686";
        document.getElementById("5").style.color = "#699686";
        document.getElementById("8").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p1').text ('Player 1: ' + player1_points);
        player1_points += 1;
    }
    
    if (a.innerText === "X" && e.innerText === "X" && i.innerText === "X") {
        document.getElementById("0").style.color = "#699686";
        document.getElementById("4").style.color = "#699686";
        document.getElementById("8").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p1').text ('Player 1: ' + player1_points);
        player1_points += 1;
    }
    
    if (c.innerText === "X" && e.innerText === "X" && g.innerText === "X") {
        document.getElementById("2").style.color = "#699686";
        document.getElementById("4").style.color = "#699686";
        document.getElementById("6").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p1').text ('Player 1: ' + player1_points);
        player1_points += 1;
    } 
    
    //check if player O wins
    
    if(a.innerText === "O" && b.innerText === "O" && c.innerText === "O"){
        document.getElementById("0").style.color = "#699686";
        document.getElementById("1").style.color = "#699686";
        document.getElementById("2").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p2').text ('Player 2: '+ player2_points);
        player2_points += 1;
    }
    
    if (d.innerText === "O" && e.innerText === "O" && f.innerText === "O") {
        document.getElementById("3").style.color = "#699686";
        document.getElementById("4").style.color = "#699686";
        document.getElementById("5").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p2').text ('Player 2: '+ player2_points);
        player2_points += 1;
    }
    
    if (g.innerText === "O" && h.innerText === "O" && i.innerText === "O"){
        document.getElementById("6").style.color = "#699686";
        document.getElementById("7").style.color = "#699686";
        document.getElementById("8").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p2').text ('Player 2: '+ player2_points);
        player2_points += 1;
    }
    
    if (a.innerText === "O" && d.innerText === "O" && g.innerText === "O") {
        document.getElementById("0").style.color = "#699686";
        document.getElementById("3").style.color = "#699686";
        document.getElementById("6").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p2').text ('Player 2: '+ player2_points);
        player2_points += 1;
    }
    
    if (b.innerText === "O" && e.innerText === "O" && h.innerText === "O") {
        document.getElementById("1").style.color = "#699686";
        document.getElementById("4").style.color = "#699686";
        document.getElementById("7").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p2').text ('Player 2: '+ player2_points);
        player2_points += 1;
    }
    
    if (c.innerText === "O" && f.innerText === "O" && i.innerText === "O") {
        document.getElementById("2").style.color = "#699686";
        document.getElementById("5").style.color = "#699686";
        document.getElementById("8").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p2').text ('Player 2: '+ player2_points);
        player2_points += 1;
    }
    
    if (a.innerText === "O" && e.innerText === "O" && i.innerText === "O") {
        document.getElementById("0").style.color = "#699686";
        document.getElementById("4").style.color = "#699686";
        document.getElementById("8").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p2').text ('Player 2: '+ player2_points);
        player2_points += 1;
    }
    
    if (c.innerText === "O" && e.innerText === "O" && g.innerText === "O") {
        document.getElementById("2").style.color = "#699686";
        document.getElementById("4").style.color = "#699686";
        document.getElementById("6").style.color = "#699686";
        $('#endgame_text').text (players[whoseTurn] + ' won!');
        document.getElementById("endgame_popup").style.display = "block";
        $('#p2').text ('Player 2: '+ player2_points);
        player2_points += 1;
    }
}
