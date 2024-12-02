# `display-rotate`

ディスプレイを回転させるコマンド。指定したディスプレイを時計回りに 90 度回転させる。

[`displayplacer`](https://github.com/jakehilborn/displayplacer)コマンドを使っている。初回起動の際にインストールするかどうか聞かれるので`y`と答えてインストールすること。（`brew insatll displayplacer`が実行される）

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


