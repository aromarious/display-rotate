# `display-rotate`

個人的なディスプレイ設定のコマンド。ディスプレイを時計回りに 90 度回転する。

[`displayplacer`](https://github.com/jakehilborn/displayplacer)コマンドを使っている。

## インストール
```sh
npm install -g https://github.com/aromarious/display-rotate
```

## 使い方

```sh
% display-rotate [<display-id>]
```

`<display-id>`は`displayplacer list`コマンドの出力を見て、回転したいディスプレイの ID をコピペしてくること。

設定ファイル `~/.display-rotate` に回転対象のディスプレイ ID を書いておくと、そこからディスプレイIDを取得する。両方指定した場合、引数指定が優先される。


