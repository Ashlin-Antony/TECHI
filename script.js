// print command
console.log('hello');

// variables
a=10;       //non declared
console.log(a);
var a=10;    //variable declaration
console.log(a);
{
    var a=45;
    console.log(a);
}
console.log(a);
var a=89;
console.log(a);

//  Fuctions
let person={
    name:'jaya',
    age:23,
    place:'tvm',
}
console.log(person.name)

// new keyword in js
let car=new Object();
car.brand='hyundai';
car.model='i10';
car.color='black';
console.log(car);

//array object
var arr_obj=[{name:'jaya',age:25},{name:'maya',age:58}]
console.log(arr_obj[1].age)
var a=5;
var a3=++a;
console.group(a3);

//conditional statment
if(b==a){

}

//fuctions
function addval(b1,b2){
    var joy=b1+b2;
    console.log(joy);
}
addval(10,25);