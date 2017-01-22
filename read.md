1.install node.js
1-1.set mirror:npm config set registry https://registry.npm.taobao.org

2.npm init ==> package.json

3.npm install webpack -g
/*
-S, --save: Package will appear in your dependencies.
-D, --save-dev: Package will appear in your devDependencies.
-O, --save-optional: Package will appear in your optionalDependencies.
*/
npm install webpack --save-dev
//自动编译 + 浏览器同步刷新
npm install webpack-dev-server --save-dev

4.plugins:
npm install css-loader style-loader --save-dev
npm install extract-text-webpack-plugin --save-dev
npm install html-webpack-plugin --save-dev