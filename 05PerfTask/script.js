let age = prompt("Please enter your age: ");
if (age >=25){
    alert("Confirmed: You are 25 years old or older.");
} else{
    alert("User is under 25.");
}

let num = prompt("Please enter a number: ");
if (num < 100){
    alert("Confirmed: The number entered is less than 100.");
} else{
    alert("The number is 100 or greater.");
}

for (let i = 0; i <= 30; i++){
    console.log(i);
}

for (let i = 0; i <= 40; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

for (let i = 40; i >= 10; i--){
    if (i % 3 === 0){
        console.log(i);
    }
}