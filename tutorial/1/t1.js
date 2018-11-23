var fName = prompt("Kimo no na wa? (Your name?)");

if (fName !== null && fName.length > 0)
    document.getElementById("t1").innerHTML = "Hello " + fName;
else
    alert("Enter name next time please");