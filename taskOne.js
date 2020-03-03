exports.hexadecimalNumber = () => {
    let number = Math.floor(Math.random() * 1000) + 1;
    //console.log(number);
    let elements = [];
    let i=0;
    let hexadecimalNumber='';
    do
    {
        elements[i]=number%16;
        number=parseInt(number/16);
        //console.log(number);
        //console.log(elements[i]);
        i++;
    }while(number>=16);
    elements[i]=number;
    for(i;i>=0;i--)
    {
        if(elements[i]==10)
        elements[i]='A';
        if(elements[i]==11)
        elements[i]='B';
        if(elements[i]==12)
        elements[i]='C';
        if(elements[i]==13)
        elements[i]='D';
        if(elements[i]==14)
        elements[i]='E';
        if(elements[i]==15)
        elements[i]='F';
        hexadecimalNumber=hexadecimalNumber + elements[i].toString();
    }

    console.log("\nШістнадцяткове число: "+ hexadecimalNumber);
}

//hexadecimalNumber();