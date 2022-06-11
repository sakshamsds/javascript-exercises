const caesar = function (string, shift) {
    let arr = string.split('');

    const newArr = arr.map(char => {
        let asciiCode = char.charCodeAt();

        if ((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)) {
            return String.fromCharCode(
                mod(asciiCode + shift - codeSet(asciiCode), 26) + codeSet(asciiCode)
            );
        }
        return char;
    });

    // console.log(newArr);
    return newArr.join('');
};

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n % m + m) % m;


// Do not edit below this line
module.exports = caesar;
