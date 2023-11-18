# CUIの初歩
## GUIとCUI
- GUI(Graphical User Interface)
  - 絵付きの画面
  - マウスでカチカチして操作
  - 直感的
- CUI(Character User Interface)
  - 文字のみの画面
  - 所謂黒い画面
  - コマンドで操作
  - 出力結果も全部文字のみ

## cmd
- 起動方法  
`Win+R→cmd→Enter`が一番モテるやり方
- (ちょっと違うけど、)cmdはExplorerの、CUI版のようなもの  
厳密にいうと、  
```
cmdはCUIツールであり、ExplorerのCUI版としての機能も兼ねてる
```
という感じ

![image](./img/explorer_cmd.png)

- 超初歩的なコマンド
  - `echo`
  ```bat
  echo "Hello, World!!"
  ```
  - `dir`
  - `cd`
  - `mkdir`
  - `ping`
- 環境変数と`%PATH%  `
→これは多分まだ難しいからキーワードだけ頭の隅に置いといてもらえると...  
  - 環境変数  
  プログラミングでいうところの変数と同じ。  
  システムを動かすのに必要な情報が変数として保持されている。  
  cmdでは変数は`%変数名%`で呼びだせる。  
  例えば、%username%という環境変数の中身を見るには、
  ```bat
  echo %username%
  ```
  とすれば良い。
  - `%PATH%`
  `%PATh%`というのは、環境変数の中でも、特に重要なやつ。

- バッチファイルについて  

## LinuxのCUI(bash)
cmdはWindows用。  
bashというのは、cmdのLinux版だと思ってくれれば。  
この前おとかさんが教えてくれたのは、この話のはず。  
