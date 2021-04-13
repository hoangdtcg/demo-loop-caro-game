function checkEven(number) { //Kiểm tra 1 số có phải số chẵn hay không
    let check  = true;
    if(number % 2 !== 0){
        check = false;
    }else {
        check = true;
    }
    // if(check){
    //    document.write(n + " là số chẵn");
    // }else {
    //     document.write(n + " là số lẻ");
    // }

    return check;

    // return (number%2===0);
}

function checkPrime(n) {
    let check = true;
    if(n <= 1){return false;}
    for (let i = 2; i < n; i++) {
        if(n % i === 0){
            check = false;
        }
    }
    return check;
}


function sumOfEven(n) { //Tổng các số chẵn
    let count = 0;
    let sum = 0;
    let a = 2;

    while (count < n){
        if(checkPrime(a)){
            sum+=a;
            count++;
        }
        a++;
    }
    document.write("Tổng là " + sum);
}
