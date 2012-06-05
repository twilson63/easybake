request = require 'request'
path = require 'path'
fs = require 'fs'
log = console.log

dotfile = path.join(process.env.HOME, ".easybake")
cakefileUri = 'https://raw.github.com/twilson63/cakefile-template/master/Cakefile'

fs.stat dotfile, (err, stats) ->
  return if err?
  log 'Loaded from dotfile'
  cakefileUri = JSON.parse(fs.readFileSync(dotfile)).src

cakefile = path.join('.','Cakefile')

module.exports = ->
  destination = fs.createWriteStream(cakefile)
  destination.on('close', -> log 'Cakefile installed!')
  request(cakefileUri).pipe(destination)
