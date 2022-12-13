const _ = require('lodash')
const sheets = require('./src/json/sheets.json')
const { config } = require('./package.json')

module.exports = {
  $config: config,
  $sheets: sheets,
  _,
}
