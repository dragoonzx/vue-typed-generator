"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToKebab = exports.capitalizeFirstLetter = void 0;
const capitalizeFirstLetter = ([first, ...rest]) => {
    return [first.toLocaleUpperCase(), ...rest].join('');
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
const camelToKebab = (string) => {
    // eslint-disable-next-line require-unicode-regexp
    return string
        .replace(/([\da-z])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
        .toLowerCase();
};
exports.camelToKebab = camelToKebab;
