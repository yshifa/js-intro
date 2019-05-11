/*var s="Hello world";
function a() {
    console.log(s);
}
a(s);

function c() {
    console.log("called c function");
}
function b() {
    c();
    console.log("called b function");
}
function x() {
    b();
    console.log("called a function");
}
x();*/
function grades(num)
{
    if(num >= 85){
    console.log("distinction");
    }
    else if((num <= 85) && (num >= 65))
    {
    console.log("first class");
    }
   else if((num <= 65) && (num >= 50))
   {
    console.log("second class");
   }
    else
    {
    console.log("fail");
    }
}
var num=prompt("enter the number");
grades(num);