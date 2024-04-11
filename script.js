
errorMsg = '';
result = 0;
isValidate= false;
expression = '';

function appendNum(number) {
    document.getElementById('errorMsg').innerHTML = "";
    if(expression == 'Infinity' || expression == 'Error' || expression == '0'){
        expression = '';
    }
    if(expression.startsWith('+') || expression.startsWith('*') || expression.startsWith('/') || expression.startsWith('0')){
        expression = ''
    }
    console.log(number);
    expression += number;
    document.getElementById('input').value = expression;
}

function appendOperator(operator) {
    document.getElementById('errorMsg').innerHTML = "";
    if(expression.endsWith('+') || expression.endsWith('*') || expression.endsWith('/') || expression.endsWith('.') || expression.endsWith('-')){
        expression = expression.slice(0,expression.length-1) + operator;
    }else{
        expression += operator;
    }
    document.getElementById('input').value = expression;
}

function equal() {
    try {
        if (validateInput()) {
            const result = eval(expression);
            document.getElementById('input').value = result;
            expression = result.toString();
        }
    } catch (error) {
        document.getElementById('input').value = 'Error';
        expression = '';
    }
}

function validateInput() {
    if (expression.endsWith('+') || expression.endsWith('*') || expression.endsWith('/') || expression.endsWith('.') || expression.endsWith('-')) {
        document.getElementById('errorMsg').innerHTML = "Please enter the valid number"; 
        alert("Enter valid number");
        return false;
    }else{
        return true;
    }
}

function del() {
    this.expression = this.expression.slice(0, -1);
    document.getElementById('input').value = this.expression;
}

function reset() {
    this.expression = '';
    document.getElementById('input').value = this.expression;
}