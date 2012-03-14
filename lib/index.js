var cakefileUri, fs, request;

request = require('request');

fs = require('fs');

cakefileUri = 'https://raw.github.com/twilson63/cakefile-template/master/Cakefile';

module.exports = function() {
  return request(cakefileUri, function(err, resp, body) {
    if (err != null) throw new Error(err);
    fs.writeFileSync('./Cakefile', body);
    return console.log('Cakefile created!');
  });
};
