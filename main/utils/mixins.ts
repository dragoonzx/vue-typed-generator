const capitalizeFirstLetter = ([first, ...rest]:[string, string[]]):string => {
  return [first.toLocaleUpperCase(), ...rest].join('')
}

const camelToKebab = (string):string => {
  // eslint-disable-next-line require-unicode-regexp
  return string
    .replace(/([\da-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase()
}

export { capitalizeFirstLetter, camelToKebab }
