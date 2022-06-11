const reverseString = function(input) {

    // split
    const arr = input.split("");
    // console.log(arr.length);

    // reverse 
    for(let i=0; i<arr.length/2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
        // console.log(arr);
    }
    // console.log(arr);

    // join and return
    return arr.join("");

    // return input.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
