# HomeStars Componentized Icons

A set of React components containing SVG icons.

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
  return <Project stroke="#000000" />
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
