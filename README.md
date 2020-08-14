# nicomment-js
ニコニコ動画ライクなコメントを描写する為のJavaScriptライブラリです。


# usage
- 初期化
```javascript
const comment=new NicommentJS(id,width,height,{options});
```
  変数|値
  ---|---
  id|canvasのID
  width|描写領域の横幅
  height|描写領域の高さ
  options|オプション

- コメントを追加する
```javascript
comment.send(text,{type:fuga,color:hoge}):
```
変数|値
---|---
text|コメント
type|コメントの描写位置。naka,ue,shitaのいずれか。
color|コメントの色
customAttr|カスタム属性(オブジェクト)
size|コメントの大きさ(big/small/demiumのいずれか)
color|コメントの描写色
fontNam|フォント名
opacity|コメントの透過度(0～1)


# オプションについて
オプション名|説明
---|---
bigLines|bigコメントの行数
mediumLines|通常コメントの行数
smallLines|smallコメントの行数
duration|コメントの表示時間
