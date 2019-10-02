let number = 4;

console.log(factorial(number));

function factorial(n) {
    if(n == 0) return 1;
    product = 1;
    for(i = 1; i <= n; i++)  product *= i;
    return product;
}
