// 1. display number in textbox
function displaynum(num){
 result.value+=num
}
// 2. clear textbox
function clearbox(){
    result.value=""
}
// 3.evaluate expression
function evaluateExpr(){
    result.value=eval(result.value)
}
// 4. remove last item from text box
function removeitem(){
    currentexp=result.value
    result.value=currentexp.slice(0,-1)
}