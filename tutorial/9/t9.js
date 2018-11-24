function openAlert(m) {
    alert(m);
}

function getChar(event) {
    if(event.which == null)
        return String.fromCharCode((event.keyCode));
    else if (event.which != 0 && event.charCode != 0)
        return String.fromCharCode(event.which);
    else
        return null
}

document.getElementById("charInput").onkeypress = (event) => {
    var char = getChar(event || window.event)
    if (!char)
        return false;
    document.getElementById("keyData").innerHTML = char + " was clicked";
    return true;
}

document.getElementById('charInput').onfocus = (event) => {
    document.getElementById('keyData').innerHTML = "Input gained focus";
}

document.getElementById('charInput').onselect = (event) => {
    document.getElementById('keyData').innerHTML = "Input selected";
}

document.getElementById('logoButton').onclick = (event) => {
    document.getElementById('logo').className = "show";
}

document.getElementById('logo').onmouseover = (event) => {
    document.getElementById('logo').src = "other.jpg";
    document.getElementById("mouseInput").value = "Mouse over img";
}

document.getElementById('logo').onmouseout = (event) => {
    document.getElementById('logo').src = "tigrex_magma.png";
    document.getElementById("mouseInput").value = "Mouse left img";
}

document.body.onmousemove = (e) => {
    e = e || window.event;
    var mX = e.pageX;
    var mY = e.pageY;

    if (mX === undefined) {
        mX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        mY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    document.getElementById("mouseX").value = mX;
    document.getElementById("mouseY").value = mY;
}

document.getElementById("clearI").onclick = ev => {
    var iElements = document.getElementsByTagName("input");
    for (var i = 0; i < iElements.length; i++) {
        if (iElements[i].type === "text")
            iElements[i].value = "";
    }
}
