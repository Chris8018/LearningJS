document.getElementById("chgBkColor").onclick = e => {
    document.getElementById("sampDiv").style.backgroundColor = "#EFDECD";
}

document.getElementById("chgBkImg").onclick = e => {
    document.getElementById("sampDiv").style.backgroundImage = "url('bg.jpg')";
}

document.getElementById("chgBorderStyle").onclick = e => {
    document.getElementById("sampDiv").style.borderStyle = "solid";
}

document.getElementById("chgBorderWidth").onclick = e => {
    document.getElementById("sampDiv").style.borderWidth = "thick";
}

document.getElementById("chgBorderColor").onclick = e => {
    document.getElementById("sampDiv").style.borderColor = "blue";
}