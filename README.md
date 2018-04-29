# Hello Webpack

1. Development environment that uses Webpack to generate html, bundle preprocessed styles, scripts, and watch files in order to live hot reload with Webpack Dev Server. 

2. Production environment that uses Extract Text Webpack Plugin to generate a CSS file and minifies all files.

### Prerequisites

Start by cloning this repo, then run

```
cd hello-webpack
```

then run
```
npm install
```
and run npm start
```
npm start
```

Open localhost:8080 and you will see 'Hello Webpack' in your browser.

## Live Reload

As you change files in the src folder, you will see changes reflected in the browser.

### New Files
When adding new files, restart your server so that the new files will be watched.

### Proxy
If using Apache, you can use a proxy by editing your httpd-vhosts.conf file

```
<VirtualHost *:80>
    ServerName hello-webpack.localhost

    ProxyPass / http://localhost:8080/
    ProxyPassReverse / http://localhost:8080/

    ProxyPassMatch ^\/api\/.+$ http://php-application/
    ProxyPassReverse / http://php-application/
</VirtualHost>
```
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

* **Billie Thompson** - *README template* - [PurpleBooth](https://github.com/PurpleBooth)
