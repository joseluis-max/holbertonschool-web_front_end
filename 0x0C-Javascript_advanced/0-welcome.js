#!/usr/bin/env node
/**
 * welcome - lexical scope example
 * @param {String} firstName 
 * @param {String} lastName 
 */
function welcome(firstName, lastName){
    let fullName = firstName + " " + lastName;
    function displayfullName(){
        console.log(`Welcome ${fullName} !`);
    }
    displayfullName();
}

welcome('Holberton', 'School');
