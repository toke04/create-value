#! /usr/bin/env node

const argv = require("minimist")(process.argv.slice(2));

if (argv.a) {
  const array = [argv.a].concat(argv._);
  console.log(array);
} else if (argv.r) {
  const ranges = argv.r.match(/\w+/g);
  const convertedArray = rangeToArray(ranges);
  console.log(convertedArray);
} else if (argv.o) {
  const array = [argv.o].concat(argv._);
  const returnedObject = {};
  for (let index = 0; index < array.length; index++) {
    returnedObject["key" + (index + 1)] = array[index];
  }
  console.log(returnedObject);
} else {
  const description = `
オプションを指定してご利用下さい。
[例]
-a : スペース区切りで値を複数渡すと、配列が出来ます
❯ valueop -a neko inu salu
[ 'neko', 'inu', 'salu' ]

-r : 1. [1以上の数値]..[2以上の値]を渡す
   : 2. [a以上の値]..[z以下の値]を渡す
❯ valueop -r 1..5         
[ 1, 2, 3, 4, 5 ]

❯ valueop -r a..e
[ 'a', 'b', 'c', 'd', 'e' ]

-o : スペース区切りで値を複数渡すと、オブジェクトが作成されます
❯ valueop -o neko inu salu
{ key1: 'neko', key2: 'inu', key3: 'salu' }
`;
  console.log(description);
}

function rangeToArray(argv) {
  const returnedArray = [];
  if (Number(argv[0])) {
    for (let index = Number(argv[0]); index <= Number(argv[1]); index++) {
      returnedArray.push(index);
    }
  } else {
    for (
      let index = argv[0].charCodeAt(0);
      index <= argv[1].charCodeAt(0);
      index++
    ) {
      returnedArray.push(String.fromCharCode(index));
    }
  }
  return returnedArray;
}
