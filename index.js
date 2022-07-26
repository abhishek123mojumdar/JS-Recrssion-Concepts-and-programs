// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

function popOut(arr) {
  arr.pop();
  setTimeout(() => {
    if (arr.length > 0) {
      popOut(arr);
    }
  });
  console.log(arr);
}

function printNumberFromNToOne(n) {
  if (n >= 1) {
    console.log(n);
    n = n - 1;
    printNumberFromNToOne(n);
  }
}

function printNumberFromOneToN(start, n) {
  if (start <= n) {
    console.log(start);
    start = start + 1;
    printNumberFromOneToN(start, n);
  }
}

function print1ToNBackTrack(n) {
  if (n > 0) {
    print1ToNBackTrack(n - 1);
    console.log(n);
  }
}

function printNto1BackTrack(init, max) {
  if (init <= max) {
    printNto1BackTrack(init + 1, max);
    console.log(init);
  }
}

console.log(
  '----------------------------popOut (This function helps to pop out the elements of an array  recursively // We can write the same code without using setTimeOut but that may cause stack overflow in a huge array// Using setTimeout helps us to avoid that as the CB function inside the STout is pushed in the event queue initially and then put back into the stack once the stack is empty)----------------------------------'
);
popOut([1, 2, 3, 4, 56, 3, 7, 8, 9]);

console.log(
  '----------------------------printNumberFromOneToN  Using recurssion----------------------------------'
);
printNumberFromOneToN(1, 10);

console.log(
  ' ----------------------------printNumberFromNToOne Using recursion----------------------------------'
);
printNumberFromNToOne(10);

console.log(
  ' ----------------- Print number from 1 to n using back tracking -------------------------'
);
print1ToNBackTrack(10);

console.log(
  ' ----------------- Print number from n to 1 using back tracking -------------------------'
);
printNto1BackTrack(1, 10);
