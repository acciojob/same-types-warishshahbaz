function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }
    
    // Check if types of both values are the same
    return typeof value1 === typeof value2;
}

// do not change the code below.
//let value1 = prompt("Enter Start of the Range.");
//let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
