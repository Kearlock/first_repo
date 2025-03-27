function add(a, ...args) {
  let sum = 0;
  for (const i of args) {
    sum += i;
  }
  console.log(args);
  console.log(a);
  return sum;
}
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));
