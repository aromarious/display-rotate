# `display-rotate`

[🇯🇵 日本語README](readme.ja.md)

A command for personal display settings. Rotates the display 90 degrees clockwise.

It uses the [`displayplacer`](https://github.com/jakehilborn/displayplacer) command.

## Installation
```sh
npm install -g https://github.com/aromarious/display-rotate
```

## Usage

```sh
% display-rotate [<display-id>]
```

You can find the `<display-id>` by running the `displayplacer list` command and copying the ID of the display you want to rotate.

If you write the display ID to be rotated in the configuration file `~/.display-rotate`, it will be obtained from there. If both are specified, the argument specification takes precedence.
