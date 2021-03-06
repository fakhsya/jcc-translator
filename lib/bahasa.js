/* Google Translate supported languages: https://translate.google.com/about/intl/en_ALL/languages.html */
var languages = require('./languages.json');

/* Returns the language object searched by its code */
function getLanguage(code) {
  return languages.find(function (language) {
    return language.code === code;
  });
}

/* Returns a string (regex form) which contains all language codes (-s, -t options) */
function getLanguagesCodesRegex() {
  return '^(' + languages.map(function (language) {
    return language.code;
  }).join('|') + ')$';
}

/* Returns a string which contains all languages: code  name (-h option) */
function getLanguagesList() {
  return languages.map(function (language) {
    return language.code + '\t\t' + language.name;
  }).join('\n');
}

/* Exporting all functions */
module.exports.getLanguage = getLanguage;
module.exports.getLanguagesCodesRegex = getLanguagesCodesRegex;
module.exports.getLanguagesList = getLanguagesList;