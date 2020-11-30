### 遇到的问题

* core-js/fn/array/flat-map in ./node_modules/@babel/polyfill/lib/noConflict.js
* core-js/fn/promise/finally in ./node_modules/@babel/polyfill/lib/noConflict.js
* core-js/fn/string/pad-end in ./node_modules/@babel/polyfill/lib/noConflict.js
* core-js/fn/string/pad-start in ./node_modules/@babel/polyfill/lib/noConflict.js
* core-js/fn/string/trim-end in ./node_modules/@babel/polyfill/lib/noConflict.js
* core-js/fn/string/trim-start in ./node_modules/@babel/polyfill/lib/noConflict.js
* core-js/fn/symbol/async-iterator in ./node_modules/@babel/polyfill/lib/noConflict.js
* core-js/library/fn/array/is-array in ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
* core-js/library/fn/global in ./node_modules/@babel/polyfill/lib/index.js
* core-js/library/fn/parse-float in ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js
* core-js/library/fn/parse-int in ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js

To install them, you can run: npm install --save core-js/fn/array/flat-map core-js/fn/promise/finally core-js/fn/string/pad-end core-js/fn/string/pad-start core-js/fn/string/trim-end core-js/fn/string/trim-start core-js/fn/symbol/async-iterator core-js/library/fn/array/is-array core-js/library/fn/global core-js/library/fn/parse-float core-js/library/fn/parse-int
ℹ ｢hot｣: webpack: Compiling Done

有两种方法解决(本项目是通过第一种方法解决的,装了core-js@3)
  - 1   npm install core-js@3 --save   or  npm install core-js@2 --save
  - 2   presets: [ [ "@vue/app", { useBuiltIns: "entry" } ] ]


Missing space before function parentheses  函数括号前缺少空格


