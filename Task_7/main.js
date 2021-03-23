/******************************************************************************

                            Online Javascript Interpreter.
                Code, Compile, Run and Debug javascript program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
// for send function to select input
// for send function to select input
var message = prompt("Enter the message");
var count = prompt("Enter the Number of times");  
var looper = 0;
for(looper=0;
   looper<count; 
    looper++)
{
    window.InputEvent = window.Event || window.InputEvent;
    var d = new Date();
    var event = new InputEvent('input', {bubbles: true});
    var textbox= document.querySelector('#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text');
    
    textbox.textContent = message;
    textbox.dispatchEvent(event);
    var b = document.querySelectorAll('#main > footer > div.vR1LG._3wXwX.copyable-area > div:nth-child(3) > button')[0]
    b.click();
}