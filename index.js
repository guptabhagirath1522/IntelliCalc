var num1,num2;
//disabling enter key
// console.log([document.basicCalc,"foorm"]);
// document.basicCalc.addEventListener("submit", (event) => {
//   event.preventDefault();
// });
// //mapping enter
// document.basicCalc.addEventListener("keyup", function(event) {
//     if (event.code === 'Enter') {
//         Answer();
//     }
// });

//-------------Login------------------//
function AddAChar(inChar)
{
if(document.basicCalc.txtbox_area.value == null || document.basicCalc.txtbox_area.value == "0")
         document.basicCalc.txtbox_area.value=inChar
    else
 document.basicCalc.txtbox_area.value +=inChar;
}


function Clear() 
{
document.basicCalc.txtbox_area.value="0";
}

function Answer() 
{
    let finalValue = document.basicCalc.txtbox_area.value;
    
    try{
        let expression = calculateExpression(finalValue);
        document.basicCalc.txtbox_area.value= eval(expression);
    }catch (e) {
    if (e instanceof SyntaxError) {
        alert(e.message);
    }    
}
}

function calculateExpression(expression) {
    // Replace all instances of "numbers" with digit
    expression = expression.replace(/one/gi, "1");
    expression = expression.replace(/One/gi, "1");
    expression = expression.replace(/ONE/gi, "1");
    expression = expression.replace(/two/gi, "2");
    expression = expression.replace(/Two/gi, "2");
    expression = expression.replace(/TWO/gi, "2");
    expression = expression.replace(/three/gi, "3");
    expression = expression.replace(/Three/gi, "3");
    expression = expression.replace(/THREE/gi, "3");
    expression = expression.replace(/four/gi, "4");
    expression = expression.replace(/Four/gi, "4");
    expression = expression.replace(/FOUR/gi, "4");
    expression = expression.replace(/five/gi, "5");
    expression = expression.replace(/Five/gi, "5");
    expression = expression.replace(/FIVE/gi, "5");
    expression = expression.replace(/six/gi, "6");
    expression = expression.replace(/Six/gi, "6");
    expression = expression.replace(/SIX/gi, "6");
    expression = expression.replace(/seven/gi, "7");
    expression = expression.replace(/Seven/gi, "7");
    expression = expression.replace(/SEVEN/gi, "7");
    expression = expression.replace(/eight/gi, "8");
    expression = expression.replace(/Eight/gi, "8");
    expression = expression.replace(/EIGHT/gi, "8");
    expression = expression.replace(/nine/gi, "9");
    expression = expression.replace(/Nine/gi, "9");
    expression = expression.replace(/NINE/gi, "9");
    

    // Replace all instances of "plus" with "+"
    expression = expression.replace(/plus/gi, "+");
    expression = expression.replace(/Plus/gi, "+");
    expression = expression.replace(/PLUS/gi, "+");
    expression = expression.replace(/sum/gi, "+");
    expression = expression.replace(/Sum/gi, "+");
    expression = expression.replace(/SUM/gi, "+");
    expression = expression.replace(/add/gi, "+");
    expression = expression.replace(/Add/gi, "+");
    expression = expression.replace(/ADD/gi, "+");
    expression = expression.replace(/addition/gi, "+");
    expression = expression.replace(/Addition/gi, "+");
    expression = expression.replace(/ADDITION/gi, "+");



    // Replace all instances of "minus" with "-"
    expression = expression.replace(/minus/gi, "-");
    expression = expression.replace(/Minus/gi, "-");
    expression = expression.replace(/MINUS/gi, "-");
    expression = expression.replace(/subtract/gi, "-");
    expression = expression.replace(/Subtract/gi, "-");
    expression = expression.replace(/SUBTRACT/gi, "-");
    expression = expression.replace(/subtraction/gi, "-");
    expression = expression.replace(/Subtraction/gi, "-");
    expression = expression.replace(/SUBTRACTION/gi, "-");
    expression = expression.replace(/less/gi, "-");
    expression = expression.replace(/Less/gi, "-");
    expression = expression.replace(/LESS/gi, "-");


    
    // Replace all instances of "divide" with "/"
    expression = expression.replace(/divide/gi, "/");
    expression = expression.replace(/Divide/gi, "/");
    expression = expression.replace(/DIVIDE/gi, "/");
    expression = expression.replace(/divided by /g,"/");
    expression = expression.replace(/by /g,"/");
    
    // Replace all instances of "multiply" with "*"
    expression = expression.replace(/multiply/gi, "*");
    expression = expression.replace(/Multiply/gi, "*");
    expression = expression.replace(/MULTIPLY/gi, "*");
    expression = expression.replace(/of/gi, "*");
    expression = expression.replace(/Of/gi, "*");
    expression = expression.replace(/OF/gi, "*");
    expression = expression.replace(/cross/gi, "*");
    expression = expression.replace(/Cross/gi, "*");
    expression = expression.replace(/CROSS/gi, "*");
    expression = expression.replace(/into/gi, "*");
    expression = expression.replace(/Into/gi, "*");
    expression = expression.replace(/INTO/gi, "*");

    // Evaluate the expression and return the result
    expression = expression.replace(/power/gi, "**")
    return (expression);
}

function sqrt() 
{
	document.basicCalc.txtbox_area.value= Math.sqrt(document.basicCalc.txtbox_area.value); 
}
function percent() 
{
        document.basicCalc.txtbox_area.value=(document.basicCalc.txtbox_area.value)/100 ;
}

function Round() 
{
        document.basicCalc.txtbox_area.value=Math.round(document.basicCalc.txtbox_area.value); 
}
function negative()
{
document.basicCalc.txtbox_area.value =  0 - document.basicCalc.txtbox_area.value;
}

