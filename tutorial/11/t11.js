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
// How to handle that? delete/minimize whitespace
// nodeName, nodeType, firstNode, lastNode
sDiv.childNodes[0].style.backgroundColor = "#F0FFFF"; // change bg color of 1st node inside tag with id sampDiv

sDiv.childNodes[0].childNodes[1].style.backgroundColor = "#BFAFB2"; // change bg color of 2nd node of the 1st node inside tag with id sampDiv

var nLogo = document.getElementById("logo");
console.log({"logo hasAttribute alt": nLogo.hasAttribute("alt")});
nLogo.setAttribute("alt", "HEHEHEHEHE")
console.log({"logo Attribute alt value": nLogo.getAttribute("alt")});

var attributeList = document.getElementById("logo").attributes;
for (let i = 0; i < attributeList.length; i++) {
    console.log(attributeList[i].nodeName + ": " + attributeList[i].nodeValue);
}

var paragraphT = document.createElement("p");
paragraphT.setAttribute("id", "paragraphT");
paragraphT.innerHTML = "Duis aute irure dolor in reprehenderit in voluptate velit esse. ";

sDiv.appendChild(paragraphT);

sDiv.insertBefore(paragraphT, sDiv.childNodes[0]);