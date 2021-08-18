var bannedPlayers = [];
function keypressed(event) {
    if (competitionon) {
        for (let uj = 1; uj < 28;) {
            if (letters[uj-1] == event.which || letters[uj-1] == event.key || letters[uj-1] == event.code || letters[uj-1] == event.which || letters[uj-1] == event.key || letters[uj-1] == event.code) {
                /*playernames, winners */
                for(let kkoo = 0; kkoo<1000; kkoo++){
                    if(event.key == bannedPlayers[kkoo]) {
                        notify('The person spamming "'+bannedPlayers[kkoo]+'" just got banned (although not for life)', 900);
                        break;
                    }
                    if (winners.length < 6) {
                    if(winners[0]!=playernames[uj] && winners[1]!=playernames[uj] && winners[2]!=playernames[uj] && winners[3]!=playernames[uj] && winners[4]!=playernames[uj]) {
                        winners[winners.length] = playernames[uj];
                        console.log(winners);
                    }
                }
                }
                
            }
            uj = uj+1;
        }
    }
    else {
        bannedPlayers.push(event.key);
    }

}
document.getElementById("gear").addEventListener("click", settingOPEN);
function settingOPEN() {
    document.getElementById("gear").removeEventListener("click", settingOPEN);
    document.getElementById("gear").addEventListener("click", settingCLOSE);
    document.getElementById("settings").style.display="initial";
}
function settingCLOSE() {
    console.log("hi CLOSE");
    document.getElementById("settings").style.display="none";
    document.getElementById("gear").removeEventListener("click", settingCLOSE);
    document.getElementById("gear").addEventListener("click", settingOPEN);
    
}

function edit(pn) {
    if (document.getElementById("p"+pn).disabled) {
        document.getElementById("p"+pn).disabled=false;
        document.getElementById("p"+pn).style.backgroundColor = "rgba(78, 141, 111)";
        console.log(document.getElementById("p"+pn).disabled);
        document.getElementById("edit"+pn).style.color = "#0f85a3";
        document.getElementById("edit"+pn).dataset.hello="true";
    }
    else {
        document.getElementById("p"+pn).disabled=true;
        console.log(document.getElementById("p"+pn).disabled);
        document.getElementById("p"+pn).style.backgroundColor = "rgba(78, 141, 111, 0)";
        document.getElementById("edit"+pn).style.color = "#59a30f";
        document.getElementById("edit"+pn).dataset.hello="false";

    }
}
function username(event/*enter*/, user/*5*/) {
    if (event.which == 13 || event.keyCode == 13 || event.key == "Enter" || event.key == "enter" || event.code == "Enter" || event.code == "enter") {
        var thetimeoutandIDKythis_soLONG = 2000;
        document.getElementById("edit"+user).innerHTML='<img id="donewhat'+user+'" src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg" style="height:6vh;">';
        setTimeout(function() {
            setPlayer(user, document.getElementById("p"+user).value);
            console.log('sup');
            document.getElementById("donewhat"+user).style.display="none";
            notify("save successful! Please refresh for the changes to occur", 1300)
        }, thetimeoutandIDKythis_soLONG);
        
    }
    
}
for (let ktro = 1; ktro < 27;) {
    if (document.getElementById("p" + ktro) !== null) {
        document.getElementById("p" + ktro).value = playernames[ktro-1];
    }
    
    ktro = ktro + 1;
} 
var ketko;
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
for (let ketko = 1; ketko < 27; ketko++) {
    document.getElementById("settings").innerHTML = document.getElementById("settings").innerHTML+'<input type="search" name="fname" id="p'+ketko+'" value="'+JSON.parse(window.localStorage.Pnames)[ketko]+'" class="pname" onkeydown="username(event,'+ketko+')" onload="username('+ketko+')" disabled><i class="pname fa fa-pencil-square" id="edit'+ketko+'" style="font: normal normal normal 14px/1 FontAwesome; background-color: transparent; font-size: 4vmin;" onclick="edit('+ketko+')"></i> <p class="keys">key: '+letters[ketko-1]+`</p><hr class="hr">`;
}
for (let yuie = 1; yuie < 27; yuie++) {
    document.getElementById("edit"+yuie).addEventListener("click", function() {
        if (document.getElementById("edit"+yuie).dataset.hello == "true") {
            notify("Please press enter to save the name", 1350);
        }
    });
}
/*function() {
        if (document.getElementById("edit`+ketko+`").dataset["hello"] == "true") {
            console.log("editing");
        }
        else {
            console.log(document.getElementById("edit`+ketko+`").dataset)
        }
    }*/
function notify(message, time) {
    var WHAAAT_a_random_thing_whaa = 1;
    var naachi2 = 2500;
    document.getElementById("notif").innerHTML = message;
    var gtyu = -10;
    var eej = setInterval(function() {
        document.getElementById("notif").style.bottom=gtyu+"vh";
        gtyu=gtyu+0.1;
        if (gtyu > 1) {
            setTimeout(function() {
                var keej = setInterval(function() {
                    document.getElementById("notif").style.bottom=gtyu+"vh";
                    gtyu=gtyu-0.1; 
                    if (gtyu < -30) {
                        clearInterval(keej);
                    }
                }, WHAAAT_a_random_thing_whaa);
            }, time);
            clearInterval(eej);
        }
    }, WHAAAT_a_random_thing_whaa);
    gtyu=gtyu+1;    
}
document.getElementById("ready").addEventListener("click", function() {
    document.getElementById("ready").style.display="none";
    var eekjop = document.getElementsByClassName("ready");
    var adnughiu;
    for (adnughiu = 0; adnughiu < eekjop.length; adnughiu++) {
    eekjop[adnughiu].style.display = "none";
    }
    document.getElementById("countdown").style.display = "block";
    document.getElementById("startAudio").addEventListener("ended", countdown);
    document.getElementById("startAudio").play()
});
function countdown() {
    document.getElementById("startAudio").removeEventListener("ended", countdown);
    let countedFAR = 2
    var elINTERVEL = setInterval(() => {
        if (countedFAR == 1) {
            
            setTimeout(() => {
                document.getElementById("countdown").innerHTML = "GO!";
                competitionon = true;
                clearInterval(elINTERVEL);
                setTimeout(() => {
                    competitionon=false;
                    document.getElementById("winners").style.display = "initial";
                    document.getElementById("countdown").innerHTML = "";
                    for (let wrugh = 1; wrugh < 6; wrugh++) {
                        document.getElementById("rank"+wrugh).innerHTML = winners[wrugh-1];
                    }
                }, 2300);
            }, 1000);
            
        }
        document.getElementById("countdown").innerHTML = countedFAR;
        document.getElementById("startAudio").play();
        countedFAR = countedFAR-1;
    }, 1000);
}
if (localStorage.settings == undefined || localStorage.settings == null) {
    localStorage.settings = true;
    settingOPEN();
}