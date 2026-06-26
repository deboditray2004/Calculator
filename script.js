let isInverse = false;

function toggleInverse() {
  isInverse = !isInverse;
  const invBtn = document.getElementById('btn-inv');
  if (isInverse) {
    invBtn.style.color = '#EB0028';
    document.getElementById('btn-sin').textContent = 'asin';
    document.getElementById('btn-cos').textContent = 'acos';
    document.getElementById('btn-tan').textContent = 'atan';
    document.getElementById('btn-log').textContent = '10^x';
    document.getElementById('btn-ln').textContent = 'e^x';
  } else {
    invBtn.style.color = '#ffeb3b';
    document.getElementById('btn-sin').textContent = 'sin';
    document.getElementById('btn-cos').textContent = 'cos';
    document.getElementById('btn-tan').textContent = 'tan';
    document.getElementById('btn-log').textContent = 'log';
    document.getElementById('btn-ln').textContent = 'ln';
  }
}

function appendSci(val) {
  if (isInverse) {
    if (val === 'sin(') val = 'asin(';
    else if (val === 'cos(') val = 'acos(';
    else if (val === 'tan(') val = 'atan(';
    else if (val === 'log(') val = '10^(';
    else if (val === 'ln(') val = 'e^(';
  }
  appendToDisplay(val);
}

function expand() {
  const calc = document.querySelector('.calculator');
  calc.classList.toggle('expanded');
}

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

function clearDisplay() {
  const disp = document.getElementById("displayText");
  //const wrap = document.getElementById("display");
  fadeOutDisplayText();
  setTimeout(() => {
    disp.textContent = "Calculator";
    fadeInDisplayText();
  }, 150);
  document.getElementById("easterEgg").classList.remove("show");
  document.querySelector('.top-panel').classList.remove("red-bg");
  document.getElementById('display').classList.remove("red-bg");
}

function deleteLast() {
  const disp = document.getElementById("displayText");
  let str = disp.textContent;
  if (str === "Calculator" || str === "Error") return;

  str = str.slice(0, -1);
  if (str.length === 0) {
    clearDisplay();
    return;
  }
  disp.textContent = str;
}


function appendToDisplay(value) {
  const disp = document.getElementById("displayText");
  const wrap = document.getElementById("display");
  const egg = document.getElementById("easterEgg");

  if (disp.textContent === "Calculator" || disp.textContent === "Error" || disp.textContent === "0") {
    fadeOutDisplayText();
    setTimeout(() => {
      disp.textContent = value;
      fadeInDisplayText();
    }, 150);
  } else {
    disp.textContent += value;
  }

  wrap.scrollLeft = wrap.scrollWidth;
  egg.classList.remove("show");
  document.querySelector('.top-panel').classList.remove("red-bg");
  document.getElementById('display').classList.remove("red-bg");
}



function calculate() {
  const disp = document.getElementById("displayText");
  const egg = document.getElementById("easterEgg");
  const wrap = document.getElementById("display");
  let str = disp.textContent;

  if (str === "1+") {
    egg.classList.add("show");
    document.querySelector('.top-panel').classList.add("red-bg");
    document.getElementById('display').classList.add("red-bg"); 
    disp.textContent = "";
    return;
  }

  try {
    str = processSymbols(str);
    let res = eval(str);
    if (typeof res === "number" && !Number.isInteger(res)) {
      res = parseFloat(res.toFixed(14));
    }
    disp.textContent = res;
    wrap.scrollLeft = wrap.scrollWidth;
    egg.classList.remove("show");
    wrap.classList.remove("red-bg");
  } catch {
    disp.textContent = "Error";
  }
}

function processSymbols(expr) {
    expr = expr
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-');

    // Inverse and Scientific replacements
    expr = expr.replace(/asin\(/g, 'Math.asin(');
    expr = expr.replace(/acos\(/g, 'Math.acos(');
    expr = expr.replace(/atan\(/g, 'Math.atan(');
    expr = expr.replace(/10\^\(/g, '10**(');
    expr = expr.replace(/e\^\(/g, 'Math.E**(');
    
    expr = expr.replace(/sin\(/g, 'Math.sin(');
    expr = expr.replace(/cos\(/g, 'Math.cos(');
    expr = expr.replace(/tan\(/g, 'Math.tan(');
    expr = expr.replace(/log\(/g, 'Math.log10(');
    expr = expr.replace(/ln\(/g, 'Math.log(');
    expr = expr.replace(/√\(/g, 'Math.sqrt(');
    expr = expr.replace(/π/g, 'Math.PI');
    expr = expr.replace(/e/g, 'Math.E');
    expr = expr.replace(/\^/g, '**');
    expr = expr.replace(/(\d+)!/g, 'factorial($1)');

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

function fadeOutDisplayText() {
  const text = document.getElementById("displayText");
  text.classList.remove("fade-in");
  text.classList.add("fade-out");
}

function fadeInDisplayText() {
  const text = document.getElementById("displayText");
  text.classList.remove("fade-out");
  text.classList.add("fade-in");
}
