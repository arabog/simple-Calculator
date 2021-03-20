/* create a constructor function Calculator that creates 
objects with 3 methods:

read() asks for two values using prompt and remembers them 
in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

Rewrite to class
The Clock class (see the sandbox) is written in functional style. 
Rewrite it in the “class” syntax.

P.S. The clock ticks in the console, open it to see. */
var readlineSync = require('readline-sync');


// create a constructor func of objs with 3 methods
function Calculator(){
          
          // read() ask for 2 values and give obj ppties
          this.read = () => {
                    this.firstVal = +readlineSync.question("Give me your first number: ");
                    this.secondVal = +readlineSync.question("Give me your second number: ");
          }


          // sum() give sum of props
          this.sum = function () {
                    return this.firstVal + this.secondVal;
          }

          // mul() gives prod of props
          this.mul = () => {
                    return this.firstVal * this.secondVal;
          }

          // console.log('After values: ' + this.firstVal);

}

let calculator = new Calculator();
calculator.read();

// console.log(calculator.read());

console.log("Sum = " + calculator.sum());
console.log("Mul = " + calculator.mul());