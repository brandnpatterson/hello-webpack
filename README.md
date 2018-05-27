# Hello Webpack

This is a development environment that uses [Webpack](https://webpack.js.org/) to generate html, bundle preprocessed scripts / styles, and watch files to reloaded with [Webpack Dev Server](https://github.com/webpack/webpack-dev-server).

This also contains a production environment that minifies JS and uses Extract Text Webpack Plugin to generate minified CSS.

Other core tools included are [Sass](https://sass-lang.com/), [Autoprefixer](https://github.com/postcss/autoprefixer), [Stylelint](https://stylelint.io/), and [ESLint.](https://eslint.org/)

jQuery and Bootstrap are included through a CDN, but are not the focus of this dev env.


## Prerequisites

Start by cloning this repo, and run

```
cd hello-webpack
```

remove the git files from this project to make it your own
```
rm -rf .git
```

then
```
npm install
```
and start the dev server
```
npm start
```

Open localhost:8080 and you will see 'Hello, Webpack' in your browser.

## Commands

Start the dev server
```
npm start
```

Optimize files for to production
```
npm run prod
```

Optimize files and deploy to [surge.sh](https://surge.sh/)
```
npm run deploy
```

This is used with the other commands to remove build files
```
npm run clean
```

## Live Reload

As you change files in the src folder, you will see changes reflected in the browser.

## Built With

* [Babel](https://babeljs.io/) - Compiles JS ES6 to ES5 (polyfills included)
* [Webpack](https://webpack.js.org/) - Bundles files
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) - Local Node Server for Webpack
* [ESLint](https://eslint.org/) - Lints JS files
* [Sass](https://sass-lang.com/) - CSS with superpowers
* [Autoprefixer](https://github.com/postcss/autoprefixer) - adds vendor prefixes to CSS rules
* [Stylelint](https://stylelint.io/) - Lints CSS / SCSS files

## Authors

* **Brandon Patterson** - *Initial work* - [brandnpatterson](https://github.com/brandnpatterson)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* **Billie Thompson** - [PurpleBooth Github](https://github.com/PurpleBooth) - [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* **Ken Wheeler** - [kenwheeler Github](https://github.com/kenwheeler) - [Medium Post on Open Soruce](https://medium.com/@ken_wheeler/a-bitter-guide-to-open-source-a8e3b6a3c1c4)
