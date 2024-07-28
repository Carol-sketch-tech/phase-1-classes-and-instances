// every class has the abiluty to generate copies of itself reffered to as instances.
// each of these classes refer to unque data often set when the instance is created.

// class syntax and how to use the constructor.
//  A Basic Class- it is written in one line 
 class fish {}
//  with only a name and a bracket.
// we can now create new instances og the fish class by using new.
const firstFish = new fish();
// second instance 
const secondFish =new fish ();
firstFish;
secondFish;

firstFish == secondFish;

// using the constructor 
// when we create an isntance of class whe want it to contain some bit if unque infromation form 
// the beggining. to this we use a special methid called constructor.
class Fish {
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
}
const redfish = new fish("red",3);
const  bluefish= new fish ("blue",4 );
redfish;
bluefish;
// assigning instant properties 
// what is happening exactly inside the constrector.
// constructor(name, age){
//     this.name=name;
//     this.age = age;
// }
// two arguments, name and age are passed in and then assigned to something new:this.
// think of this as a reference to the object it is inside.
// sonce we are calling constructor whne we create a new instance ('new Fish ('red', 3)), this is refereing to the instance we've created.this fish.


// accessing instance properties 
// if weve assingeed an instance to a variable, we can access properties using the variable object.
const oldfish = new Fish("ben",67);
const youngFish= new Fish("ken",15);
 console.log(oldfish.age);
console.log( youngFish.name);

// by uusing this.name and this.age to define properties in our constructor, we can also refer to these properties within our methods of our class.
class girl{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }

        sayName(){
            return `hello!, my name is ${this.name}`
        }
        giveAge(){
            return`and i am ${this.age}`
        }
    
}
const firstGirl= new girl("megan", 43);
const secondGirl= new girl("kate", 56);
console.log(firstGirl.name)
console.log(firstGirl.age)
console.log(secondGirl.name)
console.log(secondGirl.age)

// another example 
class Square{
    constructor(sideLength){
        this.sideLength = sideLength;
    }
    area(){
        return this.sideLength * this.sideLength;
    }
}
const areaSquare = new Square(5);
console.log(areaSquare.sideLength)
console.log(Square)
console.log(areaSquare.area())

// private properties.
// all properties areaccessible from outside an isntance as we see with square.sideLength as well as from 
// within class methods.this isnnot always desirable-sometimes we wamt to protect the data from being modified aster being ser ot we want to use methods to control the exact ways our data should be changed.
// for example.
class Transaction{
    constructor(amount, date, memo){
        this.amount =amount;
        this.date=date;
        this.memo=memo;
    }
}

const transaction = new Transaction(100.24, "03/04/2018","Grocery Shopping")
console.log(transaction.amount)
console.log(transaction.date)
console.log(transaction.memo)

// cahge the value of an instance 
transaction.amount = 5000.56;
console.log(transaction.amount)

//  to make a property private or to indicate that it should not be changed we can wtrite he properties as follows 
 class moneyMove{
    constructor(amount,date,memo){
        this._amount=amount;
        this._date=date;
        this._memo=memo;
        // when we write this._amount does  no taffect how the code works but it rather to indicate to other programmers that the properties are intendedn to be private.
    }
 }const process= new moneyMove(100.24, "03/04/2018", "Grocery Shopping")

//  however there is another way to indicate that the class properties  or variable is intended to be private.
// we can use the symbol # we can use it as follows
 class cities{
    // declare the private fields.
    #name;
    #location;
    constructor(name, location){
       this.#name = name;
       this.#location = location;
    }
 }
 const place = new  cities("nairobi","Kenya");
 console.log(place.name);
//  this code line above will return undefined
//  if we try accessing the properties as follows
console.log(place.#name)
console.log(place.#location)
// this will return a syntax error 
// a property cannot be accessed outside the class object when it is declared as private by using the # symbol.

// use this._name = name to indicatet that the property is private.