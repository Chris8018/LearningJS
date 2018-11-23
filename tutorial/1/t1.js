var name = prompt("Kimo no na wa? (Your name?)");

if (name != null)
    document.getElementById("t1").innerHTML = "Hello " + name;
else
    alert("Name please");