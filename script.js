
// ----------------1-------------------
// class Employee {

//     constructor(id, firstName, lastName, position, salary, workingHours) {
//         this._id = id;
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._position = position;
//         this._salary = salary;
//         this._workingHours = workingHours;
//     }

//     get id(){
//         return this._id
//     }

//     get firstName(){
//         return this._firstName
//     }

//     get lastName(){
//         return this._lastName
//     }

//     get position(){
//         return this._position
//     }

//     get salary(){
//         return this._salary
//     }

//     get workingHours(){
//         return this._workingHours
//     }

//     get getFullName() {
//         return `${this._firstName} ${this._lastName}`;
//     }

//     get getAnnularSalary() {
//         let sumForYear = +this.salary * 12;
//         return `employee within a year is ${sumForYear}`;
//     }


//     set id(value){
//         if(typeof value=="number"){
//             this._id=value;
//         } else {
//             console.log(`id must be a number`);
//             return; 
//         }

//     }

//     set firstName(value){
//         if(/(^[A-Z][a-z.']+$)/.test(value)){
//             this._firstName=value;
//         } else {
//             console.log(`Incorrect firstName`);
//             return; 
//         }
//     }

//     set lastName(value){
//         if(/(^[A-Z][a-z.']+$)/.test(value)){
//             this._lastName=value;
//         } else {
//             console.log(`Incorrect lastName`);
//             return; 
//         }
//     }

//     set position(value){
//         this._position=value;
//     }

//     set salary(value){
//         if(typeof value=="number"){
//             this._salary=value;
//         } else {
//             console.log(`salary must be a number`);
//             return; 
//         }

//     }

//     set workingHours(value){
//         this._workingHours=value;
//     }

//     set getFullName(value) {
//         return `${this._firstName} ${this._lastName}`;
//     }

//     set getAnnularSalary(value) {
//         let sumForYear = +this.salary * 12;
//         return `employee within a year is ${sumForYear}`;
//     }

//     set raiseSalary(percent) {
//         let prc = +this.salary * percent / 100;
//         this._salary = +this.salary + prc;
//         return employee._salary;
//     }

//     get getRaiseSalary(){
//         return `Raise Salary is ${employee._salary}`;
//     }

// }
// // ----------stugum--------------------
// let employee = new Employee("1", 'Hripsime', 'Manukyan', 'DBA', '380000', '8');
// console.log(employee.getAnnularSalary);
// console.log(employee.getFullName);

// employee.raiseSalary = 30;
// console.log(employee.getRaiseSalary);

// ========================2===========================

// class Author {
//     constructor(name, email, gender) {
//         this._name = name;
//         this._email = email;
//         this._gender = gender;
//     }

//     toString() {
//         return `my name is ${this._name}, my email address ${this._email}`
//     }

//     get name() {
//         return this._name;
//     }

//     get email() {
//         return this._email;
//     }

//     get gender() {
//         return this._gender;
//     }

//     set name(value) {
//         if (/(^[A-Z][a-z.']+$)/.test(value)) {
//             this._name = value;
//         } else {
//             console.log(`Incorrect name`);
//             return;
//         }
//     }

//     set email(value) {
//         if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
//             this._email = value;
//         } else {
//             console.log(`Incorrect emil`);
//             return;
//         }
//     }

//     set gender(value) {
//         this._gender = value;
//     }

// }


// class Book {
//     constructor(title, author, price, quantity) {
//         this._title = title;
//         this._author = author;
//         this._price = price;
//         this._quantity = quantity;
//     }

//     toString() {
//         return `the books title - ${this._title}, price for one buk - ${this._price}`
//     }

//     get title() {
//         return this._title
//     }

//     get author() {
//         return this._author
//     }

//     get price() {
//         return this._price
//     }

//     get quantity() {
//         return this._quantity
//     }

//     get getProfit() {
//         let profit = this._price * this._quantity;
//         return profit;
//     }

//     set title(value) {
//         this._title = value
//     }

//     set author(value) {
//         if (typeof bookByHripsime == 'object') {
//             this.author = value
//         } else {
//             console.log(`author wil must be a object`);
//             return;
//         }

//     }

//     set price(value) {
//         if (typeof value == "number") {
//             this._price = value;
//         } else {
//             console.log(`Price must be a number`);
//             return;
//         }
//     }

//     set quantity(value) {
//         if (typeof value == "number") {
//             this._quantity = value;
//         } else {
//             console.log(`Quantity must be a number`);
//             return;
//         }
//     }

// }


// // ---------stugum------ Author-------------
// let authorHripsime = new Author('Hripsime', 'MushHovhannisyna@gmail.com', 'female');
// authorHripsime.email = '1996ripo@gmail.com'
// console.log(authorHripsime);


// // ---------stugum------ Book-------------
// let bookByHripsime = new Book('homework7', authorHripsime, '1500', '10');
// console.log(bookByHripsime);

// ===============3=================
// class Account {
//     constructor(id, name, balance) {
//         this._id = id;
//         this._name = name;
//         this._balance = balance;
//     }


//     credit(amount) {
//         this._balance = (+this._balance) + (+amount);
//         return this._balance;
//     }

//     debit(amount) {
//         if (amount < this._balance) {
//             this._balance = (+this._balance) - (+amount);
//             return this._balance;
//         } else {
//             return `Amount exceeded balance`;
//         }
//     }

//     transferTo(anotherAccount, amount) {
//         this.debit(amount);
//         anotherAccount.credit(amount);
//         return this._balance;
//     }

//     identAccounts(accountFirst, accountSecond) {
//         return JSON.stringify(accountFirst) === JSON.stringify(accountSecond)
//     }

//     toString() {
//         return `the Account name is ${this._name}, id = ${this._id}, balance =${this._balance}`
//     }

//     get id() {
//         return this._id
//     }

//     get name() {
//         return this._name
//     }

//     get balance() {
//         return this._balance
//     }

//     set name(value) {
//         if (/(^[A-Z][a-z.']+$)/.test(value)) {
//             this._name = value;
//         } else {
//             console.log(`Incorrect name`);
//             return;
//         }
//     }

//     set balance(value) {
//         if (typeof value === 'number') {
//             this._balance = value;
//         } else {
//             console.log(`balance must be a number`);
//             return;
//         }
//     }
// }

// // -------------stugum--------------
// let account1 = new Account(1, 'Hripsime', 5000);
// let account2 = new Account(1, 'Mushegh', 8000);
// let account3 = new Account(1, 'Mushegh', 8000);
// let account4 = new Account(1, 'Armen', 8000);
// // console.log((account1));
// // console.log(account1.credit(1000));
// // console.log(account1.debit(1000));
// // console.log(account1.debit(10000));
// // console.log(account1.transferTo(account2,1000));
// // console.log(account1.identAccounts(account2,account3));
// // console.log(account1.identAccounts(account2,account4));
// // console.log(account1.toString());

// ================4=======================
// class Person {
//     constructor(firstName, lastName, gender, age) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._gender = gender;
//         this._age = age;
//     }

//     toString() {
//         return JSON.stringify(this)
//     }

//     get firstName() {
//         return this._firstName;
//     }

//     get lastName() {
//         return this._lastName;
//     }

//     get gender() {
//         return this._gender;
//     }

//     get age() {
//         return this._age;
//     }

//     get getFullName() {
//         return `${this._firstName} ${this._lastName}`;
//     }

//     set firstName(value) {
//         if (/(^[A-Z][a-z.']+$)/.test(value)) {
//             this._firstName = value;
//         } else {
//             console.log(`Incorrect firstName`);
//             return;
//         }
//     }

//     set lastName(value) {
//         if (/(^[A-Z][a-z.']+$)/.test(value)) {
//             this._lastName = value;
//         } else {
//             console.log(`Incorrect lastName`);
//             return;
//         }
//     }
// }



// class Student extends Person {
//     constructor(firstName, lastName, gender, age, array, year, fee) {
//         super(firstName, lastName, gender, age);
//         this._array = array;
//         this._year = year;
//         this._fee = fee;
//         this.infObj = {};
//     }

//     passExam(program, grade) {
//         for (let i = 0; i < this.array.length; i++) {
//             if (this.array[i] == program) {
//                 this.infObj[program] = grade;
//             }
//         }
//         if (Object.keys(this.infObj).length == this.array.length) {
//             for (var key in this.infObj) {
//                 if (this.infObj[key] < 50) {
//                     console.log(`you have an insufficient grade with ${key} `);
//                     return;
//                 }
//             }
//             this.year++;
//             console.log(`You passed the next course, welcome to ${this.year} year`);
//         }
//     }

//     get array() {
//         return this._array;
//     }

//     get year() {
//         return this._year;
//     }

//     get fee() {
//         return this._fee;
//     }

//     set array(value) {
//         value.forEach(element => {
//             if (typeof element !== 'string') {
//                 return `array must be consist only is strings `
//             }
//         });
//         this._array = value;
//     }

//     set year(value) {
//         if (typeof value !== 'number' || value.toString().split().length !== 4) {
//             return `year must be number `
//         }
//         this._year = value;
//     }

//     set fee(value) {
//         if (typeof value !== 'number' || value <= 0) {
//             return `fee must be a number and it must be > 0`
//         }
//         this._fee = value;
//     }


// }


// class Teacher extends Person {
//     constructor(firstName, lastName, gender, age, program, pay) {
//         super(firstName, lastName, gender, age);
//         this._program = program;
//         this._pay = pay;
//     }

//     get program() {
//         return this._program
//     }

//     get pay() {
//         return this._pay
//     }

//     set program(value) {
//         if (typeof this.program !== 'string') {
//             return `information a program is not correct`
//         };
//         this._program = value;
//     }

//     set pay(value) {
//         if (typeof this.program !== 'number' && value < 0) {
//             return `pay value mast be a number and > 0`
//         };
//         this._program = value;
//     }
// }


// let Student1 = new Student('Mane', 'Hovhannisyan', 'femaile', 21, ['js', 'html', 'css'], 2022, 250000);

// Student1.passExam('js', 100);
// Student1.passExam('html', 95);
// Student1.passExam('css', 55);

// let Teacher1 = new Teacher('Hripsime', 'Manukyan', 'female', '25', 'js', 500000);
// console.log(Teacher1);


// =================5================
// class Clock {
//     constructor({ template }) {
//         this.template = template;
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }

// // ---------stugum------------
// let clock = new Clock({ template: 'h:m:s' });
// clock.start();
// clock.stop()


