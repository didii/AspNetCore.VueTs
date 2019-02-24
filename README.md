# AspNetCore.VueTs

This is a simple template for an Asp.Net Core backend using Vue as the frontend framework. It has the following features:

* Asp.Net Core 2.2
* Vue.js 2.x with
  * TypeScript 3.x
  * Single file components
  * Client-side routing
  * Vuex

It has as of 24/02/2019 all the latest packages:

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

## QA

**My Vuex actions are executing multiple times**

This happens when you use dynamic modules - defined as `@Module({dynamic: true, store, name: ''})` - which will add the module at runtime to the given store.
This however means that changes to the store or module will add it again to the store since state is perserved with webpack between builds.
So I've set this project up without the dynamic modules to circumvent this.

So you should declare your module just as `@Module({name: ''})`, add it to the modules list in `@/store.ts` and fetch the store in a component using `getModule(MyModule, this.$store)`.