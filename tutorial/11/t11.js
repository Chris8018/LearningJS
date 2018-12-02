// Manipulate URL
document.write("Current URL: ", window.location.href, "<br/>")

document.write("Current HOST: ", window.location.hostname, "<br/>")

document.write("Current PATH: ", window.location.pathname, "<br/>")

document.getElementById("goToGoogle").onclick = e => {
    window.location.href = "https://www.google.com/"
}

document.getElementById("forwardPage").onclick = e => {
    history.forward();
}

document.getElementById("backPage").onclick = e => {
    history.back();
}

/*
Jump multiple place in history
history.go(int)
EG: forward: history.go(POS INT)
    back   : history.go(NEG INT)
 */

document.getElementById('reload').onclick = e => {
    window.location.reload();
}

// Editing Child notes
var pElements = document.getElementsByTagName("p"); // get all node with tag p
pElements[1].style.backgroundColor = "#EFDECD"; // change bg color 2nd tag p node

document.childNodes[1].style.backgroundColor = "#FAEBD7"; // change bg color of 2nd tag node of the document

var sDiv= document.getElementById("sampDiv"); // get all node with id sampDiv
// Space/Indentation can be caught as node (text node)
// JS can be confuse by text node
sDiv.childNodes[0].style.backgroundColor = "#F0FFFF"; // change bg color of 1st node inside tag with id sampDiv

sDiv.childNodes[0].childNodes[1].style.backgroundColor = "#BFAFB2"; // change bg color of 2nd node of the 1st node inside tag with id sampDiv


