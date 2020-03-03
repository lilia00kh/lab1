exports.insertString =(n,str1)=>
{
    let str = "It  my string";
    str=str.split('');

    str.splice(n,0,str1);

    console.log("\nВставити стрічку у відповідну позицію іншої стрічки");
    console.log(str.join(''));
}

