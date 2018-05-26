# Hello Webpack

This is a development environment that uses Webpack to generate html, bundle preprocessed scripts / styles, and watch files to reloaded with Webpack Dev Server.

It also includes a production environment that minifies JS and uses Extract Text Webpack Plugin to generate minified CSS.

## Prerequisites

Start by cloning this repo, then run

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
finally
```
npm start
```

Open localhost:8080 and you will see 'Hello, Webpack' in your browser.

## Other Commands

```
npm run prod
```
Use this command before deploying it to production. I used [Surge](https://surge.sh/)

```
npm run clean
```
This is used with the other commands to remove build files


## Live Reload

As you change files in the src folder, you will see changes reflected in the browser.

### New Files
When adding new files, restart your server so that the new files will be watched.

## Built With

* [Babel](https://babeljs.io/) - Compiles JS ES6 to ES5
* [Webpack](https://webpack.js.org/) - Bundles files
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) - Local Node Server for Webpack
* [Stylelint](https://stylelint.io/) - Lints CSS / SCSS files
* [ESLint](https://eslint.org/) - Lints JS files

## Authors

* **Brandon Patterson** - *Initial work* - [brandnpatterson](https://github.com/brandnpatterson)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* **Billie Thompson** - [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - [PurpleBooth Github](https://github.com/PurpleBooth)
* **Ken Wheeler** - [Medium Post on Open Soruce](https://medium.com/@ken_wheeler/a-bitter-guide-to-open-source-a8e3b6a3c1c4) - [kenwheeler Github](https://github.com/kenwheeler)
