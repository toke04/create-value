# 概要

本プログラムは手軽に  
・配列  
・オブジェクト(rubyではハッシュとしても使えます)  
を作成する事が出来ます。  

プログラミング学習で必要なデータを、手軽に作成する事が出来ます。
  
オプションを指定してご利用下さい。

# ご利用方法

```
# インストール
npm install -g valueop

# 使用例
❯ valueop -a neko inu salu 
[ 'neko', 'inu', 'salu' ]

❯ valueop -r 1..5
[ 1, 2, 3, 4, 5 ]

❯ valueop -r a..e 
[ 'a', 'b', 'c', 'd', 'e' ]

❯ valueop -o neko inu salu 
{ key1: 'neko', key2: 'inu', key3: 'salu' }
```