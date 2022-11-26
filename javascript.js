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

const multiply = function(arr) {
    let mlt = arr.reduce((total, num) => {
        return total*num
    },1)
    return mlt
};

const power = function(a, b) {
    let num = a;
    for(let i=1; i<b; i++){
    a *= num
}
return a
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
    }else if(e.srcElement.id === 'digital'){
        if(value1 === ''|| op === undefined){
            value1+=e.srcElement.textContent
            output.textContent=value1
            value1=parseInt(value1)
        } else {
            value2+=e.srcElement.textContent
            output.textContent=value2
            value2=parseInt(value2)
        }
    }else if(e.srcElement.id==='operator'){
        if(value1!==''){
            op=e.srcElement.textContent
            console.log(op);
        }
    }
}

window.addEventListener('mousedown', handleOperator)