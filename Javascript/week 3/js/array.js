/*jslint browser: true, devel: true, white: true, nomen: true, sloppy: true*/
/*jslint browser: true*/
var fruit=['mango','banana','lichi','guava'];
function loadFruits() 
{
    "use strict";
    document.getElementById("fruits").innerHTML=fruit;
}

function myFunction()
{
    "use strict";
    var newFruit=prompt("Enter Your Favourite:");
//    fruit[fruit.length]=newFruit;  first method
    fruit.push(newFruit);//second method
    document.getElementById("fruits").innerHTML=fruit;
    
}