# HomeStars Componentized Icons

A set of React components containing SVG icons. [View all currently available icons](https://stackblitz.com/edit/homestars-icons-example)

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
## Publishing
1. To publish one must have an npm account and be added to the to the [https://www.npmjs.com/org/homestarsdotcom](Homestarsdotcom) team.

2. Additionaly, one has to login into npm from the command line
```shell
npm login
```

3. Finally, after committing changes to `master`, run following command to publish to npm: 

```shell
$ npm run patch
```

This will increment the version, build a distribution, and publish to NPM.

4. Finally, update the npm version of the homestars-icon package in the package.json of your project. 
```shell
npm upgrade homestars-icons
```
