function clearDisplay()
{
    document.getElementById("display").textContent = "Calculator";
}

function deleteLast()
{
    const disp=document.getElementById("display");
    let str=disp.innerText;
    if(str==="Calculator" || str==="Error")
        return;
    else if(str.length==1)
        str="Calculator ";
    str=str.substring(0,str.length-1);
    disp.textContent=str;

}

function appendToDisplay(value) {
    const disp=document.getElementById("display");
    let str=disp.innerText;
    if(str==="Calculator" || str==="Error" || str==="0")
        str = value;
    else 
        str += value;
    disp.textContent=str;
}


function calculate() {
    const disp = document.getElementById("display");
    let str=disp.innerText;
    if(str==="1+")
    {
        disp.textContent="NEVER SETTLE";
        return;
    }
    try {
        str = processPercentages(str);
        disp.textContent = eval(str);
    } catch {
        disp.textContent = "Error";
    }
}

function processPercentages(expr) {
    // Case 1: e.g. 5%8 → (5/100)*8
    expr = expr.replace(/(\d+(\.\d+)?)%(\d+)/g, "($1/100)*$3");

    // Case 2: e.g. 100 + 10% → 100 + (100 * 10 / 100)
    expr = expr.replace(/(\d+(\.\d+)?)([\+\-\*\/])(\d+(\.\d+)?)%/g,
        (match, base, _, operator, percent) => {
            return `${base}${operator}(${base}*${percent}/100)`;
        });

    // Case 3: standalone percent, like "50%" → (50 / 100)
    expr = expr.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
    return expr;
}
