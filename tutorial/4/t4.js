var tStr = "This is a String";

document.write("String = ", tStr, "<br/>");
document.write("String length = ", tStr.length, "<br/>");
document.write("Index of \"is a\" = ", tStr.indexOf("is a"), "<br/>");
document.write("Index of \"i\" = ", tStr.indexOf("i"), "<br/>");
document.write("Slice (2, 5) = ", tStr.slice(2, 5), "<br/>");
document.write("Slice (2) = ", tStr.slice(2), "<br/>");
document.write("Substring (4, 4) = ", tStr.substr(4, 4), "<br/>");
document.write("Char at index 2 = ", tStr.charAt(2), "<br/>");

document.write("Replace \"This\" to \"That\" = ", tStr.replace("This", "That"), "<br/>");

var tStrArray = tStr.split(" ");
console.log(tStrArray)
document.write("Split length = ", tStrArray.length, "<br/>");

var str2 = "     Try TRIM    ";
document.write("Trim = ", str2, "<br/>");
document.write("Uppercase = ", tStr.toUpperCase(), "<br/>");
document.write("Lowercase = ", tStr.toLowerCase(), "<br/>");