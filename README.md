# Hello Webpack

Development environment that preprocesses styles, bundles scripts, and watches files to live reload all with Webpack and Webpack Dev Server

### Getting Started

Start by cloning this repo, then run

```
cd hello-webpack
```

then run

```
npm install
```

And run gulp's default task

```
gulp
```

You will see 'Hello Webpack' open at localhost:3000

## Live Reload

As you change files in the `src` folder, you will see changes reflected in the browser.

### New Files
When adding new files, restart your server so that the new files will be watched

## Using a Proxy

To add a proxy to browser sync, first create the proxy on your local machine. Next replace the `server` property with the `proxy` property and define your proxy.

```
let localhost = 'hello-webpack.localhost';

browserSync.init({
    proxy: localhost,
    // server: {
    //     baseDir: './'
    // }
});
```

## Built With

* [Babel](https://babeljs.io/) - Compiles JS ES6 to ES5
* [Webpack](https://webpack.js.org/) - Bundles JS files
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) - Local Node Server for Webpack
* [Stylelint](https://stylelint.io/) - Lints CSS / SCSS files
* [ESLint](https://eslint.org/) - Lints JS files


## Authors

* **Brandon Patterson** - *Initial work* - [brandnpatterson](https://github.com/brandnpatterson)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* **Billie Thompson** - *README template* - [PurpleBooth](https://github.com/PurpleBooth)
