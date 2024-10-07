const userIpunt = document.getElementById("userInput");

var expression = '';

function press(num){
    expression += num;
    userIpunt.value = expression;

}
function equal(){
    userIpunt.value = eval(expression);
    expression = '';
}

function erase(){
    expression = '';
    userIpunt.value = expression;
}