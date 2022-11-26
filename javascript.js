const operatorBtn = document.getElementById('operator')
const output = document.getElementById('result')
const digit = document.getElementById('digital')
let value1, value2, value3, op, result
value1=value2=value3=''

const add = function(a,b) {
    return a+b;
};

const subtract = function(a,b) {
    return a-b;
};

const multiply = function(a,b) {
    return a*b
};

const divide = function(a, b) {
    if(b === 0){
        return alert('you cant divide by 0')
    }
    return a / b;
};

const handleOperator = function(e){
    if(e.srcElement.textContent === 'CLEAR'){
        output.textContent='';
        value1=value2=value3=''
    }else if(e.srcElement.textContent === 'DELETE'){
        if(output!=null){
            let arr = output.textContent.split("")
            arr.splice(arr.length-1, 1)
            value1=output.textContent=arr.join("")
        }
    }else if(e.srcElement.textContent === '='){
        value2=parseFloat(value2)
        value1=parseFloat(value1)
        if(value1!=='' && op !== undefined && value2!==''){
            if(op==='+'){
                result = add(value1,value2)
            }else if(op==='/'){
                result = divide(value1,value2)
            }else if(op==='*'){
                result = multiply(value1,value2)
            }else if(op==='-'){
                result = subtract(value1,value2)
            }
            result=result.toFixed(2)
            output.textContent=result
        }
    }else if(e.srcElement.id === 'digital'){
        if(value1 === ''|| op === undefined){
            value1+=e.srcElement.textContent
            output.textContent=value1
        } else {
            value2+=e.srcElement.textContent
            output.textContent=value2
        }
    }else if(e.srcElement.id==='operator'){
        if(value1!=='' && value2 === ''){
            op=e.srcElement.textContent
        } else{

        }
    }
}

window.addEventListener('mousedown', handleOperator)