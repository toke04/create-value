import minimist from "minimist";
const argv = minimist(process.argv.slice(2));

if (argv.a) {
  const array = [argv.a].concat(argv._);
  console.log(array);
} else if (argv.r) {
  const ranges = argv.r.match( /\w+/g );
  const convertedArray = rangeToArray(ranges)
  console.log(convertedArray)
} else if (argv.o) {
  const array = [argv.o].concat(argv._);
  let returnedObject = {};

  for (let index = 0; index < array.length; index++) {
    returnedObject['key' + (index + 1)] = array[index];
  }

  console.log(returnedObject);
} else{
  const dolphinBeforeStdin = `
本プログラムは、手軽に
・配列
・オブジェクト(rubyではハッシュとしても使えます)
を作成する事が出来ます。

オプションを指定してご利用下さい。
例
-a : inu neko salu kiji
`;
  console.log(dolphinBeforeStdin);
}

function rangeToArray(argv) {
  const returnedArray = [];
  if (Number(argv[0])) {
    for (let index = Number(argv[0]); index <= Number(argv[1]); index++) {
      returnedArray.push(index);
    }
  }else{
    for(let index = argv[0].charCodeAt(0); index <= argv[1].charCodeAt(0); index++) {
      returnedArray.push(String.fromCharCode(index));
    }
  }
  return returnedArray;
}
