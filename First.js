let num = prompt("Enter a number : ");
let c = 2;
Isprime = true;
while(c*c < num){
    if(num % c == 0){
        Isprime = false;
    }
    c++;
}
if(Isprime){
    console.log("Prime number .");
}
else{
    console.log("Not a prime number .");
}
