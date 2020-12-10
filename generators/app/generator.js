/* eslint-disable require-unicode-regexp */
const Generator = require('yeoman-generator')

class TypedVueGenerator extends Generator {
  capitalizeFirstLetter([first, ...rest]) {
    return [first.toLocaleUpperCase(), ...rest].join('')
  }

  camelToKebab(string) {
    // eslint-disable-next-line require-unicode-regexp
    return string
      .replace(/([\da-z])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
      .toLowerCase()
  }
}

module.exports = TypedVueGenerator
