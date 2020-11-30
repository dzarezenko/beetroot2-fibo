// 1 1 2 3 5 8 13 21 34 55

function fibo(n) {
  console.log(`fibo(${n})`);

  if (n == 1) return 1;
  if (n == 2) return 1;

  return fibo(n-1) + fibo(n-2);
}

var f = fibo(10);
document.write(f);
