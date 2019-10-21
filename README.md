# AspNetCore.VueTs

This is a simple template for an Asp.Net Core backend using Vue as the frontend framework. It has the following features:

* Asp.Net Core 2.2
* Vue.js 2.x with
  * TypeScript 3.x
  * Single file components
  * Client-side routing
  * Vuex

It has as of 21/10/2019 all the latest packages:

> ![npm-check result](npm-check.png)

## Usage

To use this template, simply clone it.
Then do a find and replace all on `AspNetCore.VueTs` with the name you want this project to be.
Don't forget to also rename the folders and the name value in `package.json`.

**Note**: when you update packages yourself and somehow everything breaks, clean the project using `dotnet clean`.
The `wwwroot/dist` folder is normally never regenerated and could be the culprit.
There is an extra step added in the `.csproj`-file to also remove that folder per clean.
The next build will trigger a first-time webpack setup which might be needed for package upgrades.

## Thanks

Big thanks to Victor Alberto Gil with his [upgrade blog](https://medium.com/@vhanla/creating-a-vuejs-with-typescript-spa-on-asp-net-core-2-1-5efaee226154) that got me most of the way there.
His repo is [here](https://github.com/vhanla/vuets).
This repo differs from his since I've upgraded to Asp.Net Core 2.2 and I setup single file components.

Also big thanks to Peter Kuhn with his guide for his [source maps guide](https://www.mistergoodcat.com/post/the-joy-that-is-source-maps-with-vuejs-and-typescript).
Debugging is quite essential and is now possible to do easily.
Note that I did not get debugging working with Visual Studio Code.

## QA

### My wwwroot directory gets cleared

Normally, the entire `wwwroot` directory will never be cleared.
However, on rebuild or clean of the solution, the directory `wwwroot/dist` will be cleaned.
This will trigger a first-time webpack build.

### My Vuex actions are executing multiple times

This happens when you use dynamic modules - defined as `@Module({dynamic: true, store, name: ''})` - which will add the module at runtime to the given store.
This however means that changes to the store or module will add it again to the store since state is perserved with webpack between builds.
So I've set this project up without the dynamic modules to circumvent this.

So you should declare your module just as `@Module({name: ''})`, add it to the modules list in `@/store.ts` and fetch the store in a component using `getModule(MyModule, this.$store)`.

### Adding fonts crashes the webpack build

More exactly, you are getting the following error:

    ERROR in ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot 1:1
    Module parse failed: Unexpected character '∩┐╜' (1:1)
    You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

You most likely added a css file that uses a specific font and referenced it.

This happens because fonts aren't configured in the `webpack.config.js` file but in the `webpack.config.vendor.js` file.
This vendor configuration is only executed once on the first build (or after cleaning) such that often used libraries don't need to be built constantly during development.
You'll see that in the section `module.rules` fonts extensions are configured and in `entry.vendor` a list of often used libraries.

There are 2 solutions for this problem:

(1) You are using a font from an external css library.

You'll want to add the library to the `webpack.config.vendor.js`.
Add the correct css file(s) to the `entry.vendor` list or the name of the library if that option is supported.
For example for fontawesome, you'll need to add the specific css file `@fortawesome/fontawesome-free/css/all.min.css`.

Make sure you don't reference the file anymore from your own code.
Rebuild the project so that webpack gets to reconfigure itself.

(2) You are using your own font or are referencing fonts in your own css.

You'll need to copy the url-loader configuration from the `webpack.config.vendor.js` to `webpack.config.js`.
In the section `module.rules` you'll see a line with a regex containing lots of font extensions (png, woff, ttf, etc).
Copy that line and paste it in the `webpack.config.js` file in the same section.

Make sure you reference the necessary css file from your code (most likely from `boot.ts`).
Rebuilt the project so that webpack gets to reconfigure itself.