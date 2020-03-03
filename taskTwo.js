exports.insertString =(str,n,str1)=>
{
    str=str.split('');
    str.splice(n,0,str1);
    return str;
}
