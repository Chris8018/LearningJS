var p = ["Adrian Jen", "Pen", 5.0];

document.write("1st index", p[0], "<br/>");

// Add another element to the array
p[3] = "a.j123@foo.com";

// Delete n number of element then may be insert new one at the location
p.splice(2, 1, "Yahho", "Cirate");
p.splice(4, 1);

// Show elements of arrays
document.write("Array: ", p.valueOf(), "<br/>");
// Join elements of arrays in to a string
document.write("Array: ", p.join(", "), "<br/>");

// delete element at index
delete p[2];

// Sort
p.sort();
var nums = [4, 3, 7, 6, 10, 8];

// Customize sort
nums.sort((a, b) => a - b);
console.log(nums);

// Combine arrays
var combinedA = nums.concat(p);

// Remove last element
p.pop();
// Add to the end of array
p.push("TeeheeTeehee");
// Remove 1st element
p.shift();
// Add to the beginning of the array
p.unshift("Adrian Jen");
