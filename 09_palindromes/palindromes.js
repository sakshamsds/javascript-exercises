const palindromes = function (input) {
    input = input.replace(/\W/g, '').toLowerCase();

    // let length = input.length;
    // for (let index = 0; index < length / 2; index++) {
    //     if (input[index] !== input[length - index - 1]) {
    //         return false;
    //     }
    // }
    // return true;

    // console.log(input.split('').reverse('').join(''));
    return input === input.split('').reverse('').join('');
};

// Do not edit below this line
module.exports = palindromes;
