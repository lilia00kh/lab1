exports.hexadecimalNumber = () => {
    let number = Math.floor(Math.random() * 1000) + 1;
    //console.log(number);
    let elements = [];
    let i=0;
    let hexadecimalNumber='';
    let hexString = number.toString(16);
    return hexString;
}

//hexadecimalNumber();