function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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

function checkCookie() {
    var userName = document.getElementById("username").innerText;
    var user = getCookie(userName);
    if (user != "") {

    } else {
        setCookie(userName, user, 4);
    }
}
function saveEdits() {
    checkCookie();
    var editElem = document.getElementById("theories");

    var userVersion = editElem.innerHTML;

    localStorage.userEdits = userVersion;
    alert("The edit was saved")
}

function checkEdits() {
    //find out if the user has previously saved edits
    if(localStorage.userEdits!=null)
        document.getElementById("theories").innerHTML = localStorage.userEdits;
}
function makeEditable(){
   var theories = document.getElementById("theories");
   theories.setAttribute("contenteditable", "true");
}