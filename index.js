#! /usr/bin/env node

const argv = require("minimist")(process.argv.slice(2));

const main = () => {
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
  } else if (argv.h) {
    const description = `
    オプションを指定する際は、以下のようにご利用下さい。
    [例]
    -a : スペース区切りで値を複数渡すと、配列が出来ます
    ❯ cv -a neko inu salu
    [ 'neko', 'inu', 'salu' ]
    
    -r : 1. [1以上の数値]..[2以上の値]を渡す
       : 2. [a以上の値]..[z以下の値]を渡す
    ❯ cv -r 1..5         
    [ 1, 2, 3, 4, 5 ]
    
    ❯ cv -r a..e
    [ 'a', 'b', 'c', 'd', 'e' ]
    
    -o : スペース区切りで値を複数渡すと、オブジェクトが作成されます
    ❯ cv -o neko inu salu
    { key1: 'neko', key2: 'inu', key3: 'salu' }
    `;
    console.log(description);
  } else {
    console.log(["hoge", "fuga", "foo", "piyo", "bar"], "\n");
    console.log([1, 2, 3, 4, 5], "\n");
    console.log(
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      "\n"
    );
    console.log({ name: "taro", age: 25, hobby: "game" }, "\n");
    console.log([{ name: "taro" }, { name: "hana" }, { name: "jiro" }], "\n");
    console.log([
      { name: "taro", age: 25 },
      { name: "hana", age: 18 },
      { name: "jiro", age: 42 },
    ]);
  }
}

const rangeToArray = (argv) => {
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

main();
