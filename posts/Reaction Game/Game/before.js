var competitionon = false;
var winners = [];
window.localStorage.eet = "random DATA";
var THETHINGE = ["null" ,"Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8", "Player 9", "Player 10", "Player 11", "Player 12", "Player 13", "Player 14", "Player 15", "Player 16", "Player 17", "Player 18", "Player 19", "Player 20", "Player 21", "Player 22", "Player 23", "Player 24", "Player 25", "Player 26"];
if (window.localStorage.Pnames == undefined) {
    window.localStorage.Pnames = JSON.stringify(THETHINGE);
}
var playernames = JSON.parse(localStorage.Pnames);

function setPlayer(number/*5*/, value/*input */) {
    var ple = JSON.parse(localStorage.Pnames);
    ple[number] = value;
    localStorage.Pnames = JSON.stringify(ple);
}

