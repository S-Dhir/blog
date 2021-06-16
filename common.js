//cookie library start
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  //cookie library end
  //math.random help
  function randommath(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  //math.random help end
  //wait function
function sleep(seconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < (seconds));
}
//waitfunction end
if (getCookie("MCPopupClosed")=="yes") {
  setCookie("MCPopupClosed", "yes", 1.3)
}


//footer scroll up-down function
var theid = "footer";
var theidbgcolor=document.getElementById(theid).style.backgroundColor;
var footer = document.getElementById("footer").innerHTML;
var arrowup = '<i class="material-icons footer_arrow" onclick="scrollrtxce();" id="arrow">keyboard_arrow_up</i>';

function scrollrtxce() {
    if (document.getElementById(theid).innerHTML==footer) { /*closes the footer*/
        document.getElementById(theid).innerHTML=arrowup;
        document.getElementById(theid).style.backgroundColor="transparent";
    }
    else {
        document.getElementById(theid).innerHTML=footer; //opens  it
        document.getElementById(theid).style.backgroundColor=theidbgcolor;
    }
}
if (window.innerWidth > window.innerHeight) {
  
  document.getElementById("orientation_pop").style.display="none";
}
if (window.innerWidth < window.innerHeight) {

  document.getElementById("orientation_pop").style.display="initial";

}
