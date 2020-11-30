// 1 1 2 3 5 8 13 21 34 55

var cash = [0, 1, 1];

function fibo(n, deep = 0) {
  /*for (var i = 0; i < deep; i++) {
    document.write(`&nbsp;&nbsp;&nbsp;`);
  }

  document.write(`fibo(${n})<br />`);*/

  if (cash[n] === undefined) {
    cash[n] = fibo(n-1, deep + 1) + fibo(n-2, deep + 1);
    console.log(cash);
  }

  return cash[n];
}

var f = fibo(100);
//document.write(f);

for (var j = 1; j < cash.length; j++) {
  document.write(`${j}: ${cash[j]}<br />`);
}
