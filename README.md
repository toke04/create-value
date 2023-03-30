# demo

![create-value](https://user-images.githubusercontent.com/54713809/226917927-e4e83cba-8724-4aed-9c4f-4050046aa797.gif)

<img width="635" alt="スクリーンショット 2023-03-23 15 05 57" src="https://user-images.githubusercontent.com/54713809/227117882-c9f9fb7e-ee5b-455b-8ca0-5b1f8a9fff87.png">

## create-value

本プログラムを使うと、手軽に  
・配列  
・オブジェクト(rubyではハッシュとしても使えます)  
を作成する事が出来ます。  

プログラミングの学習で「サクッと」データが欲しい時があると思います。  

その際にご使用ください。    

また、オプションを利用する際は、`-a -r -o -h`のみを指定してご利用下さい。

## Installation

npmを使用してインストールします。
```
npm install -g create-value
```

## Usage

**ご利用の際は、オプションを付ける場合は、`-a -r -o -h`どちらかを指定してご利用下さい。**
```
# オプションなしで使用すると、よく使うであろうデータが表示されます。
❯ cv index.js
[ 'hoge', 'fuga', 'foo', 'piyo', 'bar' ] 

[ 1, 2, 3, 4, 5 ] 

[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] 

{ name: 'taro', age: 25, hobby: 'game' } 

[ { name: 'taro' }, { name: 'hana' }, { name: 'jiro' } ] 

[
  { name: 'taro', age: 25 },
  { name: 'hana', age: 18 },
  { name: 'jiro', age: 42 }
]

# -a : 配列を作成します。オプションの引数はスペース区切りで渡してください
❯ cv -a neko inu salu 
[ 'neko', 'inu', 'salu' ]

# -r : 範囲から配列を作成します。オプションは
# 1. [1以上の数値]..[2以上の値]を渡す
# 2. [a以上の値]..[z以下の値]を渡す
# でお願い致します。

❯ cv -r 1..5
[ 1, 2, 3, 4, 5 ]
❯ cv -r a..e 
[ 'a', 'b', 'c', 'd', 'e' ]

# -o : オブジェクトを作成します。引数はスペース区切りで渡してください
❯ cv -o neko inu salu 
{ key1: 'neko', key2: 'inu', key3: 'salu' }
```
