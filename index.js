'use strict'

const filters = require('./filters')

for (let name in filters){
    compiler.filter(name, filters[name])
}