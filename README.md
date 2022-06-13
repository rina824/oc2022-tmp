# Open Campus Web 2022
**Last update: June 13th, 2022 23:04 by Yoshida**  
**Note that this repository is for temporary usage!!**
## プロフェクトの概要
このリポジトリは，「Open Campus Web 2022」をするためのものです．IT班内で共同開発することを想定して作成しています．

## CSS について
このプロジェクトでは，CSS のフレームワークである Bootstrap を使用しています．
使い方は[公式ドキュメント](https://getbootstrap.jp/docs/5.0/getting-started/introduction/)を参照してください．

## Git の基本について
[このファイル](https://github.com/rina824/oc2022/files/8680678/220512_git_overview.pdf) が参考になるかもしれません．

## 作業フロー
1. 他の班からの作成依頼などで行うべき作業が発生した際に，***(A)作業管理をする人***がその作業に対応する issue を作成する．
それと同時に，(A)作業管理をする人は issue の担当者を決めて 「Assignees」 として割り当てる．

2. ***(B) issue を割り当てられた人***は，その issue 番号に対応する branch を作成する．  
  **ブランチ名は，「(issue番号)-(担当者の名前)」とする．**
  例えば，issue 番号1を吉田が担当する際に作成するブランチ名としては，「1-yoshida」となる．  
  (以下2~7は ***(B) issue を割り当てられた人***が行うことである)

3. ローカルで，リモートリポジトリで作成したブランチを取り込む．(`git fetch --all`)  
さらに，**そのブランチを作業ブランチに切り替える**．(`git checkout (branch名)`)

4. 切りの良いところまで作業を進めたら，変更を加えたファイルをgitに追加する．(`git add (ファイル名)`)

5. commit を行い，変更を git に反映させる．(`git commit -m "(メッセージ)"`)  
**コミットメッセージの文頭には，「#」+「issue番号」をつける．** これにより，参照リンクがつく．

6. リモートリポジトリに push する．(`git push origin (branch名)`)  
必ず，作業ブランチに push する．**main に直接 push しないよう注意！**  
(割り当てられた issue の作業が全て終了するまで4~6を繰り返す．)

7. 割り当てられた issue の作業が完全に終了したら，pull request を作成する．  
その際，**「Reviewers」と「Assignees」に，*(C) コードをチェックをする人*を割り当てる**．

8. ***(C) コードをチェックする人***は，pull request の内容を見てコードの review を行う．  
review の具体的な内容としては，「コードがバグを発生させていないかのチェック」や「コードの書き方に不適切な部分がないかのチェック」などが挙げられる．
***(C) コードをチェックする人***は review の際にコメントを残し，「Approve (merge してOK)」「Request changes (修正の必要あり)」のいずれかを選択する．

9. (a) review の結果が 「Request changes」の場合  
***(C) コードをチェックする人***は，***(B) issue を割り当てられた人***を再び「Assignees」に割り当てる．
***(B) issue を割り当てられた人***は (C)に指摘された部分を修正する(4~6 の繰り返し)．  
修正が終了したら再び **「Reviewers」と「Assignees」に，*(C) コードをチェックをする人*を割り当てる**．(8へ戻る)  
(b) review の結果が「Approve」の場合  
***(C) コードをチェックする人***は，pull request を main に merge する．このとき，conflict が発生している場合は解消する．
merge したら branch を消去する．また，対応する issue も削除する．


<登場人物>  
* ***(A)作業管理をする人***  -> 取りまとめ的な役割
* ***(B) issue を割り当てられた人***  
* ***(C) コードをチェックをする人*** -> 技術的なことに詳しい人が行うのが望ましい

## 共同作業を行う上でのお約束（仮）
- ファイル名やクラス名などは，**ケバブケース**(logo-top みたいに)で記述する．
- ファイル名やクラス名などには，全角の日本語を使用しない．また，全角スペースは基本的に使用しない．
- ファイル名やクラス名などを命名する際は，基本的に英単語を使ったわかりやすい名前をつける．
- **ファイル名の変更や階層の変更はできるだけ行わない．止むを得ず行う場合， git で正しく管理する．**
- **可読性を上げるために，適切にインデントを行う．**

<br>

## ディレクトリの構造
### ルートディレクトリに保存されているファイル
* index.html (トップページの html)
* README.md (このファイル)
* .gitignore (git の管理から外すものを指定するファイル)

### component 
ヘッダーやフッターなど，各ページでパーツとして読み込む html を格納するディレクトリ．
### css 
スタイルシートファイルを格納するディレクトリ．フレームワーク Bootstrap を利用するため，基本的には CSS を編集しない．自作の CSS を書きたい場合にのみ，このディレクトリ内に格納されている CSS ファイルを編集する．
### img 
画像を格納するディレクトリ．各ページで画像ファイルを使用する場合はこのディレクトリの対応するディレクトリに画像を保存 (例えば，「情報の宝庫」に使う画像であれば /img/information に保存する) し，保存先をリンク先として指定することにより画像を読み込むようにする．
### js 
JavaScript のファイルを格納するディレクトリ．自作の JS は script.js に記述する．  
質問コーナー関連の JS は /content/question/category.js に記述されているので注意．
### content  
コンテンツページの html ファイルなどを格納するディレクトリ．このディレクトリの下位階層にはコンテンツごとのディレクトリがあり，それぞれのディレクトリには index.html が存在する．リンクをしてする際にディレクトリまでのパスを指定すれば，自動的に index.html が表示される．例えば，`"/content/talk/"` をパスとして指定すれば，talk ディレクトリ直下に保存されている index.html が表示される．  
<br>

## 競合(conflict)を防ごう
共通のファイルに対して複数のブランチで作業を行うとき、競合(conflict)が起きるので注意が必要です．
### 手順：作業aと作業bで共通のファイルを扱うとき
1. まず作業aを終わらせ，リモートでマージした後，ローカルでもブランチをmainにマージする．（main に切り替え->マージ->ブランチ名選ぶ）
2. main更新（プル）必要に応じて
3. mainから作業bを行うための新しいブランチを作成
以降は同様に作業する．このようにすると前の作業の結果が残ったファイルを扱える．間違えてmainにマージする前にブランチを作ってしまっても，リベース（ブランチの付け替え）からファストフォワードを行なえばHEADからブランチを生やせる．

<br>

## gitコマンドメモ
よく使うもののまとめ．コマンドラインを使わない人は気にしないでください．
### 1.クローン
- git clone 「クローンしたいリポジトリのURL」　リモートリポジトリをローカルにクローン
### 2.プル・ブランチ作成
- git pull origin master    リモートリポジトリからプルする
- git branch   現在のブランチを確認
- git branch 「作成するブランチ名」　ブランチを作成
- git checkout 「移動先ブランチ名」　ブランチを移動
- git checkout -b 「作成して移動するブランチ名」　ブランチを作成＋移動
### 3.コミット
- git commit . (git add -a プラス git commit と同じ)で既にgitに追加済みのファイルで変更あったものを全てコミット
- git add . プラス git commit (git add -A プラス git commitと同じ)でgitに追加していない新規ファイルを含めてコミット
- git commit エディタを立ち上げてコミット
- git commit -v 変更点表示・エディタ起動
- git commit -m ‘コミットメッセージ’  エディタを立ち上げずコミット
- git status 前回コミット以降に変更されたファイルを確認
- git log  コミットの状況確認(qで抜け出せる)
- git log —graph コミットログを縦グラフで表示
### 4.コミット修正関係
- git commit -amend 直前のコミットメッセージを変更
- git reset —soft コミットだけ取り消す（ローカルリポジトリの変更内容は不変）
- git reset —hard  コミットの取り消し＋ローカルの変更内容も取り消す
- git reset —soft HEAD^ 直前の間違ったコミットを取り消す（HEAD^は直前のコミットを指す）
- git revert 「コミットID」 打ち消し（指定コミットの変更内容をもとに戻すための新規コミット作成）
### 5.プッシュ
- git remote -v  リモートリポジトリ名の表示
- git push origin 「プッシュするブランチ名」ブランチのプッシュ
### 6.ローカルでマージ
- git checkout 「マージ先ブランチ」プラス　git merge 「マージするブランチ」　ブランチのマージ
### より細かいコマンドはこちらも参考になる
- (https://qiita.com/2m1tsu3/items/6d49374230afab251337)
- (https://qiita.com/merrill/items/375b20de0a5dbc35265d)
- (https://qiita.com/thinkalot/items/9c185fe41fca269ae0b0)
- (https://www.wakuwakubank.com/posts/262-git-command/)
- (https://qiita.com/vsanna/items/451b42f886c599a16a55)

<brs>

## 参考サイト一覧
- [サル先生のGit入門](https://backlog.com/ja/git-tutorial/)
- [今日からはじめるGitHub 〜 初心者がGitをインストールして、プルリクできるようになるまでを解説](https://employment.en-japan.com/engineerhub/entry/2017/01/31/110000)
- [君には1時間でGitについて知ってもらう(with VSCode)](https://qiita.com/jesus_isao/items/63557eba36819faa4ad9)
- [今さら聞けない！GitHubの使い方【超初心者向け】](https://techacademy.jp/magazine/6235)
- [HTML5の新規タグ「section、article、header、footer」の使い方](https://sole-color-blog.com/blog/65/)
- [静的HTMLのためのテンプレートエンジン―共通部分が多いHTML](https://app.codegrid.net/entry/template-for-coding-1)
- [更新するのが面倒！サイトの共通部分を簡単に作る様々な方法](https://webdrawer.net/other/templates.html)
