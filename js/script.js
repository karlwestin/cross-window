/* Author:

*/


var testWin = openPopUp();

function openPopUp() {
    var url = "popup.html";
    popupWin = window.open ("", "popupWin", "width=400,heigh=500");

    if( !popupWin || popupWin.closed || !popupWin.doSomething ) {
        popupWin = window.open( url, "popupWin", "width=500,height=400" );
    } else popupWin.focus();

    setTimeout(function() {
        popupWin.doSomething();
    }, 200);
    return popupWin;
}

function getMessage(message) {
    console.log(message);
}

