# HomeStars Componentized Icons

A set of React components containing SVG icons. [View all currently available icons](https://homestars-icons-example.stackblitz.io)

## Installation

Using npm:
```shell
$ npm i --save homestars-icons
```

## Usage

1. Import an icon into your app.

```js
import { Project } from "homestars-icons";
```

2. Most colour options can be specified via the `stroke` prop:

```js
render = () => {
  return <Project stroke="#000000" />;
}
```

Some icons can accept a `fill` value as well; some have even more robust colouring options.

```js
<Lock 
  stroke="LightSteelBlue"
  fill="Goldenrod"
  keyholeFill="DarkSlateGrey"
/>
```

The default in most cases is `#000000`; notable exceptions include logo icons.

3. The default size is 22px x 22px, but can be adjusted via the `size` prop.

## Contributing

1. Clone this project

```shell
$ git clone git@github.com:homestars/icons.git
```

2. Install dependencies

```shell
$ npm install
```

3. Start the dev environment

```shell
$ npm start
```

4. After committing changes to `master`, don't forget to publish to NPM:

```shell
$ npm run patch
```

This will increment the version, build a distribution, and publish to NPM.
