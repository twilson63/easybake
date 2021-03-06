// Generated by CoffeeScript 1.3.3
var cakefile, cakefileUri, dotfile, fs, log, path, request;

request = require('request');

path = require('path');

fs = require('fs');

log = console.log;

dotfile = path.join(process.env.HOME, ".easybake");

cakefileUri = 'https://raw.github.com/twilson63/cakefile-template/master/Cakefile';

fs.stat(dotfile, function(err, stats) {
  if (err != null) {
    return;
  }
  log('Loaded from dotfile');
  return cakefileUri = JSON.parse(fs.readFileSync(dotfile)).src;
});

cakefile = path.join('.', 'Cakefile');

module.exports = function() {
  var destination;
  destination = fs.createWriteStream(cakefile);
  destination.on('close', function() {
    return log('Cakefile installed!');
  });
  return request(cakefileUri).pipe(destination);
};
