'use strict';

// resolve relative to build/
var path = require('path').resolve.bind(null, __dirname);

var babel = {
  test: /\.js$/,
  include: [
    path('../src')
  ],
  loader: 'babel',
  query: {
    comments: false,
    whitelist: [
      'strict',
      'es6.modules',
      'es6.classes',
      'es6.constants',
      'es6.destructuring',
      'es6.arrowFunctions',
      'es6.properties.shorthand',
      'es6.forOf',
      'es6.spread',
      'es6.parameters',
      'es6.blockScoping'
    ],
  }
};

module.exports = {
  webcompat: {
    context: path('../src'),
    entry: './runtime/web/index.js',
    output: {
      path: path('../dist'),
      filename: 'webcompat/l20n.js',
      libraryTarget: 'this',
    },
    module: {
      loaders: [babel]
    }
  },
  gaiabuild: {
    context: path('../src'),
    entry: './runtime/gaiabuild/index.js',
    output: {
      path: path('../dist'),
      filename: 'gaiabuild/l20n.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      loaders: [babel]
    }
  },
  tooling: {
    context: path('../src'),
    entry: './runtime/tooling/index.js',
    output: {
      path: path('../dist'),
      filename: 'tooling/l20n.js',
      library: 'L20n',
    },
    module: {
      loaders: [babel]
    }
  },
  aisle: {
    context: path('../src'),
    entry: './runtime/aisle/index.js',
    output: {
      path: path('../dist'),
      filename: 'aisle/l20n.js',
      libraryTarget: 'amd',

    },
    module: {
      loaders: [babel]
    }
  },
};
