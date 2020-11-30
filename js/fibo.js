// 1 1 2 3 5 8 13 21 34 55

function fibo(n, deep = 0) {
  /*for (var i = 0; i < deep; i++) {
    document.write(`&nbsp;&nbsp;&nbsp;`);
  }

  document.write(`fibo(${n})<br />`);*/

  if (n == 1) return 1;
  if (n == 2) return 1;

  return fibo(n-1, deep + 1) + fibo(n-2, deep + 1);
}

var f = fibo(43);
document.write(f);
