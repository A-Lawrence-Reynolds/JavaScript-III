/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
Window binding, "THIS" is references the window/global .
* 2. 
Implicit binding, when a function is invoked it looks to the left of the dot for the reference
* 3. 
New bining, constructs a new object and "this" references it
* 4. 
Explicit binding, it occurs when .call() .apply() and .bind() are used.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function theWorld() {
    console.log( /*this*/ );
}
theWorld()
// Principle 2
// code example for Implicit Binding
let myCow = {
    name: "Ribeye",
    moo: "MoooHooAH",
    cow: function () {
        console.log(this.moo);
    }
}
myCow.cow();


// Principle 3
// code example for New Binding
function Pig(saying) {
    this.thing = saying;
}
let myPig = new Pig("I like to snort");

console.log(myPig.thing);

// Principle 4
// code example for Explicit Binding
function wing() {
    console.log(this.iDo);
}
let myWing = {
    name: "Wing",
    iDo: " I create lift"
}
wing.call(myWing);