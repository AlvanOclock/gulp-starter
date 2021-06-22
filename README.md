# gulp-starter

## Resume
This repository is an example of a configured gulpfile.js. 

## Requirements

- [nodejs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)
- [gulp](https://gulpjs.com/docs/en/getting-started/quick-start/) 

## Installation

Using npm
```
npm install
```

At the top of the `gulpfile.js` you can change 2 constants:
```js
const SRC_DIR = "./integration";
const DIST_DIR = "./public";
```

You can let those values if it matches your folder structure or if you only want to test the gulp tasks here.
In the case of a WordPress projcet for example, you should have someting like this : 

```js
const SRC_DIR = "./integration";
const DIST_DIR = "./wp-content/themes/YOUR_THEME/assets";
```

## Usage

There is 3 tasks defined.

- `css` that will compressed and compile the .scss files present in your `sass` folder (in your src folder) to your dist folder.
- `js` that will concat and uglify all the scripts in one, and rename it `main.min.js`. It will also add a `main.js` file wich is not uglified, and so readable.
- `watch` that will watch for change in `sass` and `js` directories. On file save, the `css` and `js` tasks will be fired.

So, open your project in your favorite CLI, execute `gulp watch` and you are ready to dev :)

Feel free to change the `gulpfile.js` to remove the notification for example.

```js
.pipe(autoprefixer({
    cascade: false
}))
.pipe(gulp.dest(DIST_DIR + '/css'))
// .pipe(notify({ message: 'CSS tasks complete' }));
```

