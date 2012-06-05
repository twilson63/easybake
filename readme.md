# EasyBake

Easybake places a default Cakefile in any directory that you call the easybake command line app in.

It pulls the file from [https://github.com/twilson63/cakefile-template](https://github.com/twilson63/cakefile-template), but you can configure easybake to pull from any source.

## Install

``` sh
npm install easybake -g
```

## Usage

Open a shell in your project directory and run

``` sh
easybake
```

Then run:
```sh
cake

Cakefile defines the following tasks:

cake docs                 # generate documentation
cake build                # compile source
cake watch                # compile and watch
cake test                 # run tests

```

## Configure

``` sh
echo '{ "src": "https://raw.github.com/twilson63/cakefile-template/master/Cakefile" }' > ~/.easybake
```

## License

See LICENSE

## Contributing

pull requests welcome

Thanks to 

- [CoffeeScript](http://coffeescript.org)
- [NodeJs](http://nodejs.org)
