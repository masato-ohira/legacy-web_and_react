const { exec } = require('shelljs')
// const live = require('shelljs-live')
const { config } = require('../package.json')

const methods = {
  'dev.vite': () => {
    exec('vite', {
      silent: true,
    })
  },

  'dev.pug': () => {
    exec(
      [
        `pug ${config.src.pug}`,
        `--basedir ${config.src.pug}`,
        `--out ${config.dist.dir}`,
        `--watch --pretty`,
        `-O pug.data.js`,
      ].join(' '),
      { silent: true },
    )
  },
}

const action = () => {
  if (process.env.npm_lifecycle_event) {
    console.log(process.env.npm_lifecycle_event)
    methods[process.env.npm_lifecycle_event]()
  } else {
    console.error('KEYを指定してください')
  }
}

action()
