# nicomment-js
某ニ〇ニコ動画ライクなコメントを描写する為のJavaScriptライブラリです。

# 対応ブラウザ (Windowsのみ)
- Google Chromeの[最新版](https://www.google.com/intl/ja_jp/chrome/)
- Mozilla Firefoxの[最新版](https://www.mozilla.org/ja/firefox/new/)
- Microsoft Edgeの[最新版](https://www.microsoft.com/ja-jp/edge)

# デモ
[こちら](https://hayao-h.github.io/nicomment-js/)をご覧下さい。

# usage
## 読み込み
- html
```html
<script src="/path/to/NicommentJS"><script>
```

- または、Type Scriptファイルをダウンロードして、
```typescript
import  NicommentJS  from '/path/to/NicommentJS';
```

## 初期化
```javascript
const comment=new NicommentJS(id,width,height,{options});
```
  変数|値
  ---|---
  id|canvasのID
  width|描写領域の横幅
  height|描写領域の高さ
  options|オプション([詳細](#初期化オプションについて))

## コメントを追加する
```javascript
comment.send(text,{type:fuga,color:hoge});
```
>send(**表示したいコメント**,**オプション(オブジェクト)**)の形式です。

key|説明|デフォルト値
---|---|---
text|コメント|**必須**
layer|レイヤー名([詳細](#レイヤーについて))|base
type|コメントの描写位置。naka,ue,shitaのいずれか。|naka
customAttr|カスタム属性(オブジェクト)|-
size|コメントの大きさ(big/small/demiumのいずれか)|medium
color|コメントの描写色|white
fontNam|フォント名|MS Pゴシック
opacity|コメントの透過度(0～1)|1

## 画面上に描写されているコメントを削除する
- 全て削除
```javascript
comment.clear();
```
- 特定のレイヤーのコメントのみを削除
```javascript
comment.clear('レイヤー名');
```

## 処理を一時停止する
```javascript
comment.pause();
```

## 処理を再開する
```javascript
comment.play();
```

## 処理を終了する
```javascript
comment.dispose();
```
**注意:  
この処理は取り消すことが出来ません。  
再開する予定がある場合は、[pause()](#処理を一時停止する)を使用して下さい。**

# 初期化オプションについて
オプション名|説明
---|---
bigLines|bigコメントの行数
mediumLines|通常コメントの行数
smallLines|smallコメントの行数
duration|コメントの表示時間
duration|コメントの表示時間
layerName|デフォルトのレイヤー名([詳細](#レイヤーについて))

# レイヤーについて
本ライブラリは、描写位置などの計算をする上で、互いに干渉しない「レイヤー」を定義することが出来ます。
デフォルトのレイヤー名は"base"ですが、初期化の際にオプションでレイヤー名を指定することも出来ます。([参考:初期化オプションについて」](#初期化オプションについて))  
また、デフォルトのレイヤー以外にコメントを追加したい場合には、レイヤー名を指定する必要があります。([参考:コメントを追加する](#コメントを追加する))

- レイヤーを追加する
```javascript
comment.addLayer('レイヤー名');
```

- レイヤーを削除する
```javascript
comment.removeLayer('レイヤー名');
```

# デフォルトの設定について
本ライブラリは、デフォルトではニコ動におけるコメント機能の仕様と互換性を持つように設定されています。したがって、下のような二重リサイズを前提としたコメントアートも描写することが出来ます。

![sm11729204](/img/readme/only_my_railgun_01.png)
![sm11729204](/img/readme/only_my_railgun_02.png)

# コメント機能の仕様関連で、参考にさせていただいたWebサイト
- [コメントアートwiki②](https://w.atwiki.jp/commentart2/)
- [ニコニコ大百科: コメント](https://dic.nicovideo.jp/a/%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88)

# 権利関係
**諸般の事情により本ライブラリの公開を予告なしに停止する場合がございます。** ご了承下さい。  
また、何か権利上の問題がございましたら、GitHubのissueから連絡して下さると幸いです。