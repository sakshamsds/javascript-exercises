const sumAll = function(num1, num2) {

    // console.log(typeof typeof num1)
    // if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    //     return "ERROR";
    // }

    if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    if(num1<0 || num2 <0){
        return "ERROR";
    }

    let start;
    let end;
    if(num2 > num1){
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    }

    let sum = 0;
    for(let i=start; i<=end; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
