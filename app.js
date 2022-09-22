
// let usersName = prompt('What is your name?'); 
// let usersNameGoesHere =('Hi ' + usersName + ' I appreciate you stopping by.');
// document.write('Hi ' + usersName + ' I appreciate you stopping by.');

// if(usersName.toLowerCase() == 'dylan'){
// alert('Wow what a cool name!')
// }
// else {
// alert('oh, well it would be a lot cooler if your name was dylan.')
// };

// confirm('You should only be here if you love heavy music')

// function functionName(paramaters){code to be executed - steps}

// funtion functionName(paramaters){
    // code to be executed -steps;
// }

// declating your function

function greetUser(){
    let userName = prompt('What is your name?');
    console.log(userName);
     if(userName =="dylan" || userName == "Dylan") { 
        alert("what a cool name, thats my name too!");
    } else if (userName ==="" ){
        alert("You didn't seem to seem to tell me your name");
        prompt("Are you sure your name is'nt dylan?");
    } else if (userName !== 'dylan' )
    alert("too bad i thought you were gonna have a cool name")
    
    document.write("hello " + userName + " I appreciate you stopping by");
    return userName;}

greetUser();

// document.write('Hi ' + usersName + ' I appreciate you stopping by.')

// document.write(userName + " I appreciate you stopping by")
// // calling or invoking your function
// console.log(greetUser())

// let yourName = greetUser();

// // function expression
// // let newFunction = function(){
// // console.log("hello from inside the function expression");}

// // // function customAlert(){
// //     if (usersName.toLowerCase() == 'dylan'){
// //         alert('Wow what a cool name!')
// //         } else {
// //         alert('oh, well it would be a lot cooler if your name was dylan.')
// //         };
// // }

// let bands = prompt("How many new bands do you want to hear about")
//     console.log(i)
//     document.write("<img class=loop-images src='' alt='aletrnate text'>")