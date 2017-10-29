// module.exports = {
//   parser: 'sugarss',
//   plugins: {
//     'postcss-import': {},
//     'postcss-cssnext': {},
//     'postcss-hexrgba': {},
//     'postcss-mixins': {},
//     'postcss-simple-vars': {},
//     'postcss-nested': {},
//     'cssnano': {}
//   }
// }



let fs = require('fs');
let path = require('path');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('postcss-hexrgba'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested')
  ]
}
