request = require 'request'
fs = require 'fs'

cakefileUri = 'https://raw.github.com/twilson63/cakefile-template/master/Cakefile'

module.exports = ->
  request cakefileUri, (err, resp, body) ->
    throw new Error(err) if err?
    fs.writeFileSync './Cakefile', body
    console.log 'Cakefile created!'

