let index = 2;
var custA = ["Tom", "Bob", "Hello"];

var getCust = i => {
    if (i >= custA.length)
        throw new RangeError("OutOfBoundException")
    else
        return custA[i];
}

try {
    console.log(getCust(index));
} catch (ex) {
    if (ex instanceof RangeError)
        console.log(ex.message);
}