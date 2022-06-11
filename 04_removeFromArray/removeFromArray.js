const removeFromArray = function(...args) {
    // arr = arr.filter(item => item !== value)
    // elements.forEach(element => {
        // array = array.filter(item => item !== element);
    // })
    // return array;

    // const array = args[0];
    // const newArray = [];
    // array.forEach(element => {
    //     if(!args.includes(element)){
    //         newArray.push(element);
    //     }
    // })
    // return newArray;

    const array = args[0];
    return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
