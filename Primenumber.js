function Isprime(num) {
    let c = 2;
    while (c * c < num) {
        if (num % c == 0) {
            return false;
        }
        c++;
    }
    return true;

}
let num = prompt("Enter a number :")
if (Isprime(num)) {
    console.log("Prime number .")
}
else {
    console.log("Not prime number .")
}