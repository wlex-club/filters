'use strict'

function time(value) {
    if (value instanceof Date) {
        return value.toLocaleDateString()
    }
    return value
}

module.exports = {
    time
}