
function add(num1, num2 = 0){
    return num1 + num2;
}

const result = add(23, 45);
console.log(result);

const result2 = add(23);
console.log(result2);
