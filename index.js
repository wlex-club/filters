'use strict'
const compiler = require('@nx-js/compiler-util')
const filters = require('./filters')

for (let name in filters) {
    compiler.filter(name, filters[name])
    console.log(compiler.filter(name, filters[name]))
}
