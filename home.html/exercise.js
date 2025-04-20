// let arr = ['danish','gaurav','rahul','omveer','shadan'];
// console.log(arr);
// console.log(arr[0])
// console.log(arr[1]);
// arr.splice(2,3,'hello')
// console.log(arr);



// let a =16;
// if(a  > 18){
//     document.write("u can vote");
// }

// if(a < 18){
//     document.write("u cannot vote");
// }








// let mode ="ple";
// let color ="";
// if(mode === "dark"){
//     document.write("black");

//  } 
//  else if(mode === "light"){
//     document.write("white");
// }
// else if(mode === "blue"){
//     document.write("blue");
// }
// else if(mode === "pink"){
//     document.write("pink");
// }else{
//     document.write("purple");
// }





//        let age =22;
//        let define=age >=20 ? "adult"  :"not adult"; ternary operator

//    console.log(define);




// let name = prompt("hello");
// console.log(name);













// let j=1;
// for(let j=1 ; j<=40; j++ ){  //40 times print ombir singh rana for loop
//    document.write("ombir   singh   rana")
// }


// let sum=0;
// for(let a=1; a<=5; a++){
//     sum = sum +a;                //for loop program
//     document.write("sum =",sum);
// }


// for(i=1; i<=5; i++){
//    console.log(i);
// }



// let i=1;
// while(i<=10){
//     console.log("apna college");//while program
//     i++

// }




// let i=1;
// do{
//     console.log("popop");//do while program
//     i++;
// }

// while(i<=10);


// let a=5;
// let b=10;
// if(a<b && a>b){
// console.log("welcome in js");
// }else{
//     console.log("not welcome")
// }






//write a program give students grade.
// let score=90;
// let grade;
// if(score>=90 && score<=100){
//     grade ="first division";

// }else if(score>=80 && score<=89){
//     grade ="second division";

// }else if(score>=70 && score<=79){
//     grade ="third division";

// }else if(score>=60 && score<=79){
//     grade ="D";

// }else if(score>=0 && score<=49){
//     grade = "fail"

// }
// document.write(grade);








//  for(let num=1; num<=100; num++){// odd no print to 1 99 
//     if(num%2===1){
//         console.log(num);
//     }

//  }




// for(let num=51; num<=200; num++){
//     if(num%2!==0){                     //if(num%2!==0)this logic odd no print.
//        console.log(num);
//     }
// }






//                     for (let num = 50; num <= 200; num++) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// }





// let gamenum =25;
// let usernum =prompt("guess the game num");
// while(usernum !== gamenum ){
//     usernum = prompt("you enter wrong number guess again");
// }
// document.write("congratulations you enter right num");





// let gamenum = 25;
// let usernum = Number(prompt("Guess the game number"));

// while (usernum !== gamenum) {
//     if (usernum === null) {
//         // User clicked "Cancel", exit the loop  
//         document.write("Game canceled.");
//         break;
//     }
//     usernum = Number(prompt("You entered the wrong number. Guess again:"));
// }

// if (usernum === gamenum) {
//     document.write("Congratulations! You entered the right number.");
// }






// let str ="nancy"
// let str2 ="francico"

// console.log(str[0]);  









//string//

// let str= "gaurav";
// console.log(str.slice (2));  //slice method 



// let str2 ="ducat";
// let str3 =" india...";
// let res = ("i am learning coding from "+str2 +str3);//three value concat program
// console.log(res);




// let obj = {
//     item:"pen",
//     price:10,

// };
// console.log(`the cost of ${obj.item} is ${obj.price} rupees `);//template literals


// console.log(`equal is ${94+948+78}`);
// let str = "gaurav\tsingh";
// console.log(str.length);




// let str = "gaurav singh";
// console.log(str.toUpperCase());// we can  change sMALL  to capital  letter .




// let str1 = "GAURAV SINGH";
// console.log(str.toLowerCase());  // we can change capital to small letter.




// let str2 = '           gaurav singh';// we can start and end space remove use for trim method.
// console.log(str2.trim());



// let str = "12345678";
// console.log(str.slice(0, 4));  //slice method 





// let str = "hello";
// console.log(str.replace("hello", "hii" )); replace method is can change text.




// let str = "hello";
// console.log(str.charAt(4))//charAt method is get index value.




// string is immutable we can't change 


// let fullname = prompt("enter your full name without spaces");
// let username ="@"+ fullname + fullname.length;
// console.log(username);

// function isPrime(num) {
//     if (num <= 1) 


//     if (num % 2 === 0 || num % 3 === 0) 


//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) ;
//     }


// }


// let number = 2;
// console.log(`${number} is ${isPrime(number) ? 'a prime' : 'not a prime'} number.`);





// write 2 to 100 print prime number 

// let primenumbera =2;
// let primenumberb =3;
// let primenumberc =5;
// let primenumberd =7;
// let primenumbere =11;

// // if(primenumbera<=3 && primenumbera>=1){
// //     console.log("is prime number")

// // }
// for()




// for(let num=1; num<=100; num++){  // odd no print 
//          if(num%2===1){
//              console.log(num);
//          }

// //       }

// function printPrimes(limit) {
//     for (let num = 2; num <= limit; num++) {
//         let isPrime = true;


//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }


//         if (isPrime) {
//             console.log(num);
//         }
//     }
// }


// printPrimes(10);

// }




// let marks = [95,85,75,65,55];
// console.log(marks);



// let num = [98,90,94,23];
// console.log(num);



// let pop = ["manish", "rahul", "amit", "anu", "dudu",  23];
// for(let min of pop ){
//     console.log(min);
// }

// let cities = ["delhi", "pune", "roorke", "gurgaon"];
// for(let city of cities){
//     console.log(city.toLocaleUpperCase());
// }

// let marks = [93, 24, 35, 45, 37, 56];
// let  sum =0;
// for(let tot of marks){
//     sum +=tot;
//     console.log(sum);
// } 


// let ddl= ["kunal", "gaurav", "shadan"];
// console.log(ddl.slice(0, 2));


// let num =[1,2,3,4,5,6,7];
// num.splice(0, 0, 100, 200); // element delete and add method

// let num =[1,2,3,4,5,6,7];//element delete method 
// num.splice(1,6);


// let num =[1,2,3,4,5,6,7];
// num.splice(4, 2, 1001 );


// let names = ["amazon", "google", "ibm", "wipro", "infosys", "tcs", "tech mahindra"];
// names.splice(1, 1, "chetu"); // Removes "google" and adds "chetu" at index 1
// console.log(names);


// let names =["amazon", "google", "ibm", "wipro", "infosys", "tcs", "tech mahindra"];
// names.splice(1, 1, "chetu");
// console.log(names);


// let names =["genpact", "google", "ibm", "wipro", "infosys", "tcs", "tech mahindra"];
// names.push("amazon");
// console.log(names);

// function val (a, b){
//     return a*b ;

// }
// let once= val (3,4);
// console.log(once);


// function minas(a,b){
//     return a-b;


// }
// let once= minas(10, 5);
// console.log(once);



// function modules(a, b){
//     return a%b;

// }
// let mod = modules(2, 4);
// console.log(mod);


// function divide(a, b ){
//     return a/b;

// }
// let divi = divide(90, 9 );
// console.log(divi);


// function plus(a,  b){
//     return a+b;

// }
// let sum= plus(10, 10);
// console.log(sum);



// function fun(a,b ){
//     return a+b;
// }


// const sum = (a,b)=>{
//     return a+b;
// }

// console.log(sum(2,7));


// const sum = (a, b)=>{

//     return a*b;
// }
// console.log(sum(3, 7));

// let arrowsum = (a,b) => {
// return a+b;
// }
// let sum = arrowsum (3, 4);
// console.log(sum);




// function countvowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ){
//             count++;
//         }
//     }
//   return count;
// }

// let a =["gaurav", "kunal", "mahi", "avi"];

// a.forEach(loop);
// function loop(value, index){
//     document.write( index + ":" +value + "<br>");

//    };

// let arr=["pune", "delhi", "hydrabad"];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);


// });

// let arr= [2,3,4,5,6];
// arr.forEach((arr) => {
//     console.log(arr*arr);

// });




// let arr= [23,24,25,3,6,9]
// let arr2= arr.filter((a) => {
//     return arr<10;

// });
// console.log(arr2); 
// let arr= [23,24,25,3,6,9]
// let arr2= arr.filter((a) => {
//     return arr<10;

// });
// console.log(arr2); 


// let num =[23 , 24 , 25 ];
//   let arr = num.map((val) =>{
//     return val*2;

// });
// console.log(arr);


// let arr=  [1,2,3,45,6]

// let evenarr = arr.filter((val) => {  // odd even num print program us filter method.
//     return val % 2 ===0;
// });
// console.log(evenarr);



// let num = [1, 2, 3, 6];
// let output = num.reduce((res,out) => {
//     return res+ out;

// });
// console.log(output);


// let marks = [35, 87, 95, 99, 92];
// let toppers = marks.filter((val) => {
//     return val < 90;

// });
// console.log(toppers);

// let name = (gaurav) => {
//     console.log("hey gaurav");


// };
// name();


// let add = (a, b) =>{
//     return a-b;

// };

// console.log(add(3, 2)); 




// let n = prompt("enter a number :");
// let arr = []
// for(let i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res+curr;
// });
// console.log(sum);



// document.body.childNodes[3].innerText = "abcd"
// let heading = document.getElementById=("heading");
// console.dir(heading);



// const companies = [
//     { name: "google", category: "product based", start: 1981, end: 2004 },
//     { name: "amazon", category: "product based", start: 1992, end: 2008 },
//     { name: "paytm", category: "product based", start: 1999, end: 2007 },
//     { name: "amazon", category: "product based", start: 1992, end: 2008 },
//     { name: "paytm", category: "product based", start: 1999, end: 2007 }
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) { // Use `companies.length` to define the loop range.
//     console.log(companies [i]); // Access each company using its index.
// }





// let div = document.querySelector("div");
// console.log(div);
// let pop = document.querySelector("h1"); // Selects the first <h1> element in the document
// console.log(pop); // Logs the selected <h1> element to the console


// let h2  = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from apna college";


// let div = document.querySelectorAll(".box");
// div[0].innerText = 'unique value';
// div[1].innerText = 'new value';
// div[2].innerText = 'updated';/


// let divs = document.querySelectorAll(".box");

// let idx=  1;
// for(let div of divs){
//     div.innerText = `my val ${idx}` ; idx++; 
// };


// let div = document.querySelectorAll("div");
// console.log(div); 


// let div = document.querySelector("div");
// console.log(div);

// let val = div.getAttribute("id");
// console.log(val);


// let name = div.getAttribute("name");
// console.log(name);




// let cla = p.querySelector(".box2");
// console.log(cla);



// let pop = document.querySelector("p");
// pop.setAttribute("class","newclass");
// console.log(pop);



// let div = document.querySelector("div");
// console.log(div);

// let newbtn = document.createElement("button");
// newbtn.innerText="click me";
// console.log(newbtn); 

// let para = document.querySelector("para");
// para.after("newbtn");


// let newheading =document.querySelector("h1");
// newheading.remove();
// console.log(newheading);
// newheading.innerHTML = "<i>hello I am gaurav</i>";

// document.querySelector("body").prepend(newheading);     // add element trick



//delete element start tommarow byee

// let para = document.querySelector("p");

// para.remove();

// let btn = document.createElement("button");
// btn.innerText="click me!";
// btn.style.color="red";
// btn.style.backgroundColor="blue";
// document.querySelector("body").prepend(btn);



// let heading = document.createElement("h1");
// heading.innerText="he is a frontend developer";
// heading.style.color="red";
// heading.style.backgroundColor="aqua";
// document.querySelector("body").prepend(heading);


// let paragraph = document.querySelector("p");

// dom part end
// start event part tommarow


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn was clicked");


// }


// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);

// }



// document.getElementById('images').addEventListener('dblclick', function(){
//     alert('shoe click');
// });


// document.getElementById('images').addEventListener('mouseover', function(){
//     console.log(e);
// });



// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("dblclick", () => {
// console.log("button clicked 1 ")

// });


// let btn2 = document.querySelector("#btn2");
// btn2.addEventListener("mouseover", () => {
//   console.log("button clicked 2");
// });

// const thirdtime = () => {
//     console.log("button clicked 2 - clicked 3rd time");
//   };


//   btn1.addEventListener = ("mouseover ",thirdtime);

// btn1.removeEventListener("mouseover", thirdtime);

// btn2.addEventListener("mouseover", () => {
//     console.log("button clicked 2 - clicked 3rd time");
//   });

//   btn2.addEventListener("mouseover",() => {
//     console.log("button click 4rd time");
//   });

//   btn2.addEventListener("mouseover", () =>{
//     console.log(" button clicked 5th time ");
//   });


// let btn1 = document.querySelector("#mode");
// let body = document.querySelector("body");

// let currmode = "light";

// btn1.addEventListener("click", () =>{
//     if(currmode == "light"){
//         currmode = "dark";
//        body.classList.add("dark");
//        body.classList.remove("light");
//     }else {
//         currmode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currmode);
// });


// const student = {
//     name: "gaurav singh",
//     marks: 90,
//     printmarks: function (){
//         console.log("marks", marks);
//     }
// };


// const employee = {
//     caltax(){
//         console.log("tax rate is 30%")
//     },
// };

// const karanarjun1 = {
//     salary:50000,

// }

// const karanarjun2 = {
//     salary:50000,

// }

// const karanarjun3 = {
//     salary:50000,

// }

// const karanarjun4 = {
//     salary:50000,

// }

// const karanarjun5 = {
//     salary:50000,

// }





// let a = {
// name : "gaurav",
// language: "javascript",

// }
// console.log(a);

// let b = {
//     run: ()=>{
//         alert("run");
//     } 

// };
// // a. __proto__ =b
// // a.run;


// var name = "gaurva singh"
// console.log("name");


// let age = 20; // Declare a variable and assign the value 20
// console.log("Initial age:", age); // Print the initial value

// age = 25; // Update the variable to 25
// console.log("Updated age:", age); // Print the updated value


// let country = "india";
// console.log("currvalue",country);

// country = "us";
// console.log("updatevalue",country);



// let number =10;
// console.log(number);
// number = 15;
// console.log(number)

// const pi = 1.14
// console.log(pi)


// let firstname ="gaurav";
// let lastname ="singh";

// console.log(firstname,lastname);


// var issunny = true;
// console.log(issunny)

// var price =100;
// var price2 =50;
// var sum = price+price2;
// console.log(sum);

// var num = 25;
// var num2 = 5;
// var resut = num -num2;
// console.log(resut);

// let isactive = false;

// console.log()


// function animal (name) {

//     this.name = name;


// };
// animal.prototype.speak = function() {
//     console.log(this.name + "says hello");
// };

// let dog = new animal ("dog ");
// let cat = new animal ("cat ");

// dog.speak();
// cat.speak();


// class car {
//     constructor (name, year){
// this.name = name;
// this.year  = year;


//     }
// }

// const car1 = new car("maruti",2015);
// const car2  = new car("honda",2016);

// console.log(car1.name);
// console.log(car2.year);




// class person {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;


//     }


// }
// const person1 = new person ("ravi", 25);
// console.log("name ",person1.name);
// console.log("age", person1.age);


// class animal{
//     constructor(type, sound){
//         this.type = type;
//         this.sound = sound;


//     }
//     makesound (){
//     return `${this.type} makes ${this.sound} sound.`;

//     }
// }
// const animal1 = new animal ("dog", "bark");
// console.log(animal1.makesound());



// class student{
//     constructor(name, bca){
//         this.name = name;
//         this.bca  = bca;

//     }
//     studentdata(){
//         return `${this.name} gaurav ${this.bca} bca.`;
//     }
// }
// const student1 = new student ("student" , "shri ram college");
// console.log(student1.studentdata());



// class Animal{
//     constructor(type, sound ){
//         this.type = type;
//         this.sound = sound;


//     }
//     Makesound(){
//         return `${this.type} dog ${this.sound} bark.`

//     }
// }
// const Animal1 = new Animal ("The", "goes" );
// console.log(Animal1.Makesound());


// class Book{
//     constructor(title, author){
//         this.title = title;
//         this.author = author;


//     }
//     getdetails(){
//         return `${this.title} java script basics ${this.author} john doe.`
//     }
// }

// const book1 = new Book("The book", "is writeen by");
// console.log(book1.getdetails());


// Create a class employee.

// It should have name, position, and salary properties.
// There is a method getSalaryDetails() that returns the output:
// "Employee [name] works as [position] and earns [salary] per month."


// class Employee {
//     constructor(name, position, salary, permonth) {
//         this.name = name;
//         this.position = position;
//         this.salary = salary;
//         this.permonth = permonth;

//     }
//     getSalaryDetails() {
//         return `${this.name} Gaurav Singh ${this.position} Web Development ${this.salary} one lakh ${this.permonth}`;
//     }
// }
// const Employee1 = new Employee("Employee", "works as ", "and earn" , "per month");
// console.log(Employee1.getSalaryDetails());



// Practice Question 4:
// Create a class shape.

// It should have length and breadth properties.
// Create a method getArea() that returns the length ×breadth of the rectangle.
// Example: If length = 5 and breadth = 4, then the output is:
// Area is 20.

// Practice Question 5:
// Build a class vehicle.

// It should have name and speed properties.
// Create a method move() that gives the output:
// "[name] is moving at a speed of [speed] km/h."


// class shape{
//     constructor(length, breadth){
//         this.length = length;
//         this.breadth = breadth;


//     }
//     getArea(){
//     return this.length * this.breadth;
//     }
// }
// const rectangle = new shape(5, 4);

// console.log(`area is ${rectangle.getArea()}.`); 


// class vehicle{ 
//     constructor(names, speed){
//         this.names = names;
//         this.speed = speed;

//     };
//     move(){
//         return `${this.names}  is moving at a speed of 60 ${this.speed}.`;

//     }
// };
// const vehicle1 = new vehicle ("car", "speed km/h.");
// console.log(vehicle1.move());


// const student = {
//     name: "gaurav singh",
//     marks:60.66,
//     printmarks: function(){
//         console.log("marks = ", this.marks);
//     },

// };

// const employee = {
//     calculateTax(){
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = { 
//      salary: 50000,
//      calTax(){
//         console.log("tax rate is 20%");
//      },
// };


// karanArjun.__proto__ = employee;


// class toyotaCar {
//     start(){
//         console.log("start");
//     }
//         stop(){
//             console.log("stop");
//         }
// }
// let fortuner = new toyotaCar();


// const mySym = Symbol("key1")

// const JSUSer = {
// name:"gaurav",
// age:20,
// location:"mzn",
// email:"gauravsingh@gmail.com",
// isLoggedIn:false,
// loginDay:["monday","tuesday"]


// }
// console.log(JSUSer.name);


// function createCourse(){
//     const course = {
//           lecture:10,
//           session:3,
//           title:"java script",
//           notes:{
//             introduction:"welcome to js course"
//           },
//             enroll(){
//                        console.log("you are sucessfully enrolled")
//             }

//     }
//     return course;
// }
// const course = createCourse();


// class railwayform {
//     constructor(givenname, trainno){
//         this.name = givenname
//         this.trainno = trainno
//         // console.log("constructor called ")
//     }
//     sumbit() {
//         alert(this.name + "your form sumbited your train no: "+ this.trainno);
//     }


//     cancel() {
//         alert(this.name + "this cancel form your train no: "+ this.trainno);
//     }


//     // fill(givenname, trainno) {
//     //     this.name = givenname
//     //     this.trainno = trainno
//     // }

// }

// let harryform = new railwayform()
// harryform.fill("harry ", 12233)
// //
// let rohanform1 = new railwayform("rohan ", 34420)
// let rohanform2 = new railwayform("rohan ", 7477543)
// // rohanform1.fill("rohan ", 34420)
// // rohanform2.fill("rohan ", 7477543)


// harryform.sumbit()
// rohanform2.sumbit()
// rohanform1.cancel()


// class parent {
//     hello(){
//         console.log("hello");
//     }

// }
// class child extends parent{

// }
// let obj = new child();



// class person {
//     constructor(){
//         this.species = "homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }

// }
// class engineer extends person {
//     constructor(branch){
//         super(); 
// this.branch = branch;
//     }
//     work(){
//         console.log("solve problem, build something");
//     }
// }

// let engobj = new engineer("chemical eng");
// let DATA = "search information"

// class user {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;

//     }
//     viewdata() {
//         console.log("data", DATA);
//     }
// };

// class admin extends user {
//     constructor(name, email){
//         super(name,email);

//     }
//     editdata() {
//         DATA = "some new value";
//     }

// };


// let student1 = new user("gaurav", "gaurav @123");
// let student2 = new user("tutu", "ttutu@123");

// let teacher1 = new user("dean", "dean@456");

// let admin1 = new admin("yopu", "admin@123");

// console.log("tutt67");
// let a = "harry bhai";
// a = undefined;
// if(a != undefined){
//    throw new Error("a is not undefined")
// }else{
//     console.log("a is undefined")
// };

// try{
// console.log("we are try console log")
// myname();
// } catch (error){
//     console.log("Are you ok")
// }finally{
//     console.log("finaly we will this print");
// }


// try {
// console.log("there is no error");

// console.log(10+2);
// }catch (error) {
//     console.log("error come", error.message);

// }


// try{
// console.log("error is coming after 1 minute");
// console.log(x);
// }catch (error){
// console.log("error",error.message);
// }


// try{
//     let age = 25;
//     if(age < 0){
//         throw new Error("age cannot negaitve");
//     }
//     console.log("age is valid", age);
// }catch (error){
//     console.log("error:", error.message);

// }


// try{
//     console.log("as try block");
//     // throw new Error ("some is problem");
// }catch(error){
// console.log("error",error.message);
// }finally{
//     console.log("finally block is always execute");
// }

// try{
//     let myvariable = "gaurav singh"
//     console.log("hello world");
//     console.log(myvariable);
// }catch (error){
//     console.log("error coming",error.message);

// }

// try{
//     let marks = 10;
//     if(marks < 0 ){
//         throw new Error("marks is not can not negative");
//     }
//     console.log("marks is valid",marks);

// }catch(error){
//     console.log("error find ",error.message);
// };

// try{
//     let student = {name:"ravi", age:20};
//     console.log(student.name);
//     console.log(student.grade);

// }catch(error){
// console.log("error find ",error.message);

// };


// let age = 16;
// if(age > 18){
//     console.log("welcome");

// }else{
//    console.log("error")
// };


// try{
//     let age = 18;
//     if(age >=17){
//         throw new Error("age is valid");
//     }
//        console.log("age is valid", age);
// }catch(error){
//     console.log("age is not valid",error.message);
// };






// setTimeout(()=>{
//     console.log("practice makes perfect");
// },5000);

// function countdown  (num){
//     if(num > 0){
//         console.log(num);
//         setTimeout(countdown, 2000,num - 1);
//     }else{
//         console.log("Time's up!");
//     }

// };
// countdown(5);

// console.log("Start");

// setTimeout(()=>{
//     console.log("this is delayed");
// },2000);


// console.log("End")

// function showmessage (name){  //this is inside arguments.
// console.log(`hello , ${name}`);
// };
// setTimeout(showmessage,2000,"varun");


//  let popu = setTimeout(()=>{
//     console.log(" won't be run");

// },2000 );

// clearTimeout(popu);
// console.log("task cancelled");

// setTimeout(()=>{
//     console.log("java script learning is fun");
// },4000);

// function showname  (name){
// console.log(`hey ${name} `);
// };
// setTimeout(showname, 3000, "gaurav")

// console.log("start");
// setTimeout(()=>{
//     console.log("done");
// },1000);


// function task2 (){
//     console.log("show function");
// };
// setTimeout(task2,2000);
// clearTimeout(task2);


// let settimeid = setTimeout(()=>{
// console.log("task complete: here is your tea. ");
// },5000);

// clearTimeout(settimeid);
// console.log("task cancelled: no need for tea");

// document.querySelector("#btn");

// let settimeId = setTimeout(()=>{
//     console.log("this message will not show");
// },5000);

// document.getElementById("btn").addEventListener("click", ()=>{
//     clearTimeout(settimeId);
//     console.log("timer cancelled by user!");
// });

// let timeout1 = setTimeout(()=>{console.log("message1")},5000);
// let timeout2 = setTimeout(()=>{console.log("message2")},2000);
// clearTimeout(timeout1);

// let timeout = setTimeout(()=>{
//     console.log("you will not see this ");
// },4000);

// let cancel = true;
// if(cancel){
//     clearTimeout(timeout);
//     console.log("time was cancelled");
// };

// let timeout = setTimeout(()=>{
//     console.log("Action complete");
// },7000);

// setTimeout(()=>{
//     console.log("user cancelled the timer!");
//     clearTimeout();
// },10000);


// function cookfood(callback){
//     console.log("food is cooking");
// setTimeout(()=>{
//     console.log("food is ready");
//     callback();
// },2000);
// };

// function eatfood(){
//     console.log("i can eat food");
// };
// cookfood(eatfood);



//     function wakeup (callback){
// console.log("i am sleeping");
// setTimeout(()=>{
//     console.log("time is at 6 o clock. now getup");
// },3000);

// };

// function strtday (){
//     console.log("Now day is starting");
// };

// wakeup(strtday);


// function tution(callback){
//     console.log("Gaurav saam hogyi");
//     setTimeout(()=>{
//         console.log("Chalo ghar chale");
//         callback();
//     },3000);
// };

// function gohome(){
//     console.log("Hum ghar ki or nikal pade");
// };
// tution(gohome);


// write callback syntax 

// function firsttask (callback){
//     console.log("fist task1 ");
//        callback();
// };
// function secondtask (){
//     console.log("second task2");
// };
// firsttask(secondtask);


// let mypromise = new Promise ((resolve, reject)=>{
//     let success = true;

//     if(success){
//         resolve("task complete successfully");
//     }else{
//         reject("task failed!");
//     }

// });

// mypromise
// .then(result => console.log(result))
// .catch(error => console.log(error));



// function fetchdata() {
//     return new Promise((resolve, reject) => {
//         console.log("fetching data....")


//         setTimeout(() => {
//             let success = false;
//             if (success) {
//                 resolve("data fetch successfully");
//             } else {
//                 reject("faield to fetch data");
//             };
//         },3000);

//     });

// };

// fetchdata()
// .then(result => console.log(result))
// .then(error => console.log(error));


// let mobilepromise = new Promise((resolve, reject)=>{
// let marks = 70;
// if(marks >= 80){
//     resolve("you got new mobile")
// }else{
//     reject("You are not eligible for mobile your no is 80% below");
// }



// });

// mobilepromise
// .then(message => console.log(message))
// .catch(error => console.log(error));


// function orderpizza (){
//     return new Promise((resolve, reject) => {
//        console.log("pizza is processing ...");
//        setTimeout(() =>{
//         let isready = true; // pizza ready hai ya nahi.
//         if(isready){
//             resolve("pizza is ready take it .");
//         }else{
//             reject("sorry pizza is not ready.");
//         }

//        },3000);
//     });

// };

// //use promise 
// orderpizza()
// .then(gaurav => console.log(gaurav))
// .catch(ferror => console.log(ferror));


// function greet (){
//     console.log("hello gaurav");
// }

// let result = greet();
// console.log(result);


// function add(a, b) {
//     console.log(a + b); //
// }

// let sum = add(5, 3);
// console.log(sum);


// function chayebanaye(){
//   return ( " chaye tayar hai");
// }

// let merichaye = chayebanaye();
// console.log(merichaye);


// function getticket(booking){ 
// if(booking){
//     return "enjoy the movie";
// }else{
//     return "no booking found";
// };
//   };

//   let myticket = getticket(true);                                 
//   console.log(myticket);

// function tea(order){
//    if(order){
//     return "tea order";


//    }else{
//     return "tea is not make";
//    };

// };

// let mytea = tea(true);
// console.log(mytea);


// function startcar (fuel){
//    if(fuel > 0){
//       return "car is starter";
//    }else{
//       return "fuel empty! please refuel";
//    };
// };

// console.log(startcar(10));
// // console.log(startcar(0));


// // function carfast (){
// //    let speed = 105;
// //    if(speed >= 100){
// //       return "fast car";
// //    }else{
// //       return "slow car";
// //    };
// // };


// // console.log(carfast());


// function carfuel (){
//  let fuel = 10;
//  if(fuel > 4){
//    return "fuel is full ";
//  }else{
//    return "low fuel warning ";
//  };
// };

// console.log(carfuel ());

// function fastcar (speed){
//    if(speed > 100){
//       return "fast car ";
//    }else{
//       return "slow car ";
//    };
// };
// console.log(fastcar(90));


// function doyol (Range){
//    if(Range > 40000000){
//       return " BMW is most beautiful than Rnage";

//    }else{
//       return "Range Rover is most Expensive than BMW ";

//    };

// };

// console.log(doyol(20000000));

// function helo(){
// document.write("hello");
// };
// setTimeout(() => {
//    console.log("hello");
// },2000);

// function sum(a,b){
//     console.log(a+b);
// };

// function calculator(a,b, sumcallback ){
// sumcallback(a,b);
// };
// calculator(2,2, sum);

// function getdata(dataid){
//     console.log("data",dataid);
// }


// setTimeout(()=>{
// console.log(" data 1");
// },2000);

// setTimeout(()=>{
//     console.log(" data 2");
//     },3000);

//     setTimeout(()=>{
//         console.log(" data 3");
//         },4000);


//             function getdata (dataid, getnextdata){

//             setTimeout(() =>{
//                  console.log("data",dataid);
//                  if(getnextdata){
//                     getnextdata();
//                  };

//             },3000);  

//             };


// getdata(1, () =>{
//     getdata (2);
// }) 


// function getdata(dataid, getnextdata) {
//     setTimeout(() => {
//         console.log("data", dataid);
//         if (getnextdata) {
//             getnextdata();
//         }
//     }, 3000);
// }

// getdata(1, () => {
//     getdata(2);
// });


// let promise =  new Promise((resolve, reject) =>{
//     console.log("hello I am gaurav singh  am a promise for you");
//     resolve("success");
//     reject("some error occured");
// });

// function asyncfunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
// console.log("some data1...");
// resolve("success");
//         }, 3000);
//     });
// };

// function asyncfunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
// console.log("some data2...");
// resolve("success");
//         }, 5000);
//     });
// };




// console.log("fetching data1...");
// let p1 = asyncfunc();
// p1.then((res) =>{
//     console.log(res);
//     console.log("fetching data2...");

// });


// let ice_cream = new Promise ((resolve, reject) =>{
//     let got_ice_cream = false;
//     setTimeout(()=>{


//     if(got_ice_cream ) {
//         resolve("got ice cream");
//     }else{
//         reject("I lost ice cream");
//     }
// },3000);
// });

// ice_cream.then(() =>{
// console.log("Eat ice cream");
// }).catch(() =>{
//     console.log("calling mom")
// })



// let mypromise = new Promise((resolve, reject ) =>{
//     setTimeout(() =>{
// let success  = true;
// if(success){
//     resolve("success");
// }else{
//     reject("failed");
// };
//     },4000);

// });

// mypromise

// .then((res) => console.log(res))
// .catch((error) => console.log(error));
// // 9358221110


// console.log("one");
// console.log("two");
// setTimeout(() =>{
//     console.log("three");
// },3000);
// console.log("four");
// console.log("five");

//  let age = 19;
//  if(age >=18){
//   if(age >= 90){
// console.log("senior")
//   }else{
//     console.log("middle")
//   }
//  }else{
//     console.log("child")
//  }


// function firstTask(callback) {
//     setTimeout(() => {
//         console.log("Step 1: First task done.");
//         callback();
//     }, 2000);
// }

// function secondTask() {
//     console.log("Step 2: Second task done.");
// }

// firstTask(secondTask);

// function firsttask (callback){
//     setTimeout(() =>{
//         console.log("step 1 : first task done ")
//     },3000);
// };
// function secondtask (){
//     console.log("step 2: second task done");
// };


// firsttask(secondtask);

// firsttask(() => {
//     secondtask(() => {
//         thirdtask(() => {
//             console.log("too many nested callbacks!")
//         })
//     })
// })


// function firstTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step 1: First task done.");
//             resolve();
//         }, 2000);
//     });
// }

// function secondTask() {
//     console.log("Step 2: Second task done.");
// }

// firstTask().then(secondTask);


// function firstTask() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Step 1: First task done.");
//             resolve();
//         }, 2000);
//     });
// }

// async function processTasks() {
//     await firstTask();
//     console.log("Step 2: Second task done.");
// }

// processTasks();


// async function myfunction(){
//     return "hello";
// }
// myfunction().then(result => console.log(result));



// function fetchdata (){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve("data fetched !");
//         },2000);
//     });
// }

// async function getdata(){
//     console.log("fetching data ...");
//     const result = await fetchdata();
//     console.log(result);
//     console.log("proccessing data");
// }


// console.log("Start");

// function fetchData() {
//     for (let i = 0; i < 1000000000; i++) {} // Time-consuming task
//     console.log(" Data fetched!");
// }

// fetchData();

// console.log("End");


// console.log("Start");

// setTimeout(() => {
//     console.log(" Data fetched!");
// }, 2000);  // 2 सेकंड बाद चलेगा

// console.log("End");


// function orderFood() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("✅ खाना डिलीवर हुआ!");
//         }, 2000);
//     });
// }

// async function getFood() {
//     console.log("1️⃣ ऑर्डर किया...");
    
//     const food = await orderFood();  // यहाँ 2 सेकंड तक इंतजार करेगा
//     console.log("2️⃣", food);
    
//     console.log("3️⃣ खाना एन्जॉय कर रहे हैं...");
// }

// getFood();

// function orderfood(){
//     return new Promise (resolve =>{
//         setTimeout (()=>{
//             resolve("khana deliver hua!");
//         },3000);
//     })
// }

// async function getfood (){
//     console.log("1 order kiya ...");
// const food = await orderfood();
// console.log("2", food);
// console.log("khana enjoy kr rahe hai...");


// }
// getfood();

// async function hello() {
//     return "Hello, World!";
// }

// console.log(hello());


// async function getData() {
//     const result = await hello();  
//     console.log(result);
// }


// async function getdata (){
//     const result = await hello();
//     console.log(result);
// }
// getdata();

// function api(){
//     return new Promise ((resolve, reject )=>{
// setTimeout(()=>{
//     console.log("proccessing data...");
//     resolve(200);
// },3000);
//     });
// }
// async function getweatherdata (){
//     await api();
//     console.log("weather data 1");
//     await api();
//     console.log("weather data 2");

//     await api();
//     console.log("weather data 3");

//     await api();
//     console.log("weather data 4");

//     await api();
//     console.log("weather data 5");


//


// function getdata(dataid){
//     return new Promise ((resolve, reject )=>{
//         setTimeout(()=>{
//             console.log("data", dataid);
//             resolve("success");
//         },3000);
//     });

// }


// async function getalldata(){
//     console.log("getting data 1...");
//    await getdata(1);


//    console.log("getting data 2...");
//    await getdata(2);

//    console.log("getting data 3...");
//    await getdata(3);

//    console.log("getting data 4...");
//    await getdata(4);

//    console.log("getting data 5...");
//    await getdata(5);

//    console.log("getting data 6...");
//    await getdata(6);

// console.log("Finaly all datas get.");


// }

// async function myfunction(){
//     return "hello";

// }

// async function main(){
// let result = await myfunction();
// console.log(result);
// }
// main();


// async function myfunction(){
//     return "hello";

// }

// async function main(){
//     let pop = await myfunction();
//     console.log(pop);
// }
// main();

// async function yourfunction(){
//     return "i am inlingua student from noida";
// }
// async function main(){
//     let result = await yourfunction();
//     console.log(result);
// }
// main();


// function pop(){
//     setTimeout(()=>{
//         console.log("hello, after 2 seconds");
//     },2000);
// }

// pop();



// function fecthdata(){
//     return new Promise ((resolve)=>{
//         setTimeout(()=>{
//             resolve("data recived")
//         },3000);
//     })
// }

// async function getdata (){
//     console.log("fetching data...");
//     let result = await fecthdata();
//     console.log(result);
// }
// getdata()

// async function sayhello (){
//     return "hello, world";

// }

// async function callhello(){
//     let message = await sayhello()
//     console.log(message);
// }
// callhello();

// function fetchuser(){
//     return new Promise ((resolve)=>{
// setTimeout(()=>{
//     resolve({name: "john", age: 25})
// },3000);
//     });
// }

// async function getuser (){
//     console.log("fetching user...")
//     let user = await fetchuser()
//     console.log(user);
// }

// getuser();



// async function fetchuser (){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve({name: "alice", age:30});
//         },3000);
//     });
// }

// function fetchpost (){
//     return new Promise ((resolve)=>{
//         setTimeout(()=>{
//             resolve(["post 1 ","post 2 ", "post 3 "]);
//         },2000);
//     });
// }


// async function getuserdata(){
//     console.log("fetching user...");
//     let user = await fetchuser();
//     console.log("user",user);

//     console.log("fetching posts...")
//     let posts = await fetchpost();
//     console.log(posts);
// }

// getuserdata();


// let a = -2;

// if(a > 1){
//     console.log("no is positive");
// }else{
//     console.log("no is negitive");
// }


// class person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`hello, ${this.name}`)
//     }
// }

// class text {
//     constructor(){
//         this.name = 'js'
//     }
//     show(){
//         console.log(this.name)
//     }
// }