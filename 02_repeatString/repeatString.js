const repeatString = function(string, num) {
    if(num<0){
        return "ERROR";
    }

    let output="";
    for(let i=0; i<num; i++){
        output+=string;
    }
    return output;
    // return string.repeat(num);
    // return Array(num+1).join(string);
};

// Do not edit below this line
module.exports = repeatString;
