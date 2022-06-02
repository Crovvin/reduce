function extractValue(arr, key) {
    return arr.reduce(function(output, value){output.push(value[key]); return output;},[])
}

function vowelCount(str) {
    const vowels = "aeiou";
    splittedString = str.split("").reduce(function(output, value){
        let lower = value.toLowerCase()
        if(vowels.indexOf(lower) > -1){
            if(output[lower]){
                output[lower] = output[lower] + 1;
            } else {
                output[lower] = 1;
            }
        }
        return output;
    }, {});
    return splittedString;
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(output, newValue, index){output[index][key] = value; return output;},arr)
}

function partition(arr, callback) {
    return arr.reduce(function(output,value){
        if(callback(value)){
            output[0].push(value);
        } else{
            output[1].push(value);
        }
        return output;
    }, [[],[]])
}