# `display-rotate`

[🇯🇵 日本語README](readme.ja.md)

A command to rotate the display. Rotates the specified display 90 degrees clockwise.

It uses the [`displayplacer`](https://github.com/jakehilborn/displayplacer) command. When you run `display-rotate` for the first time, you will be asked whether to install `displayplacer`, so answer `y` to install it (`brew install displayplacer` will be executed).

## Installation
```sh
npm install -g https://github.com/aromarious/display-rotate
```

## Usage

```sh
% display-rotate [<display-id>]
% display-rotate --version  # or -v to show version
```

You can find the `<display-id>` by running the `displayplacer list` command and copying the ID of the display you want to rotate.

If you write the display ID to be rotated in the configuration file `~/.display-rotate`, it will be obtained from there. If both are specified, the argument specification takes precedence.
