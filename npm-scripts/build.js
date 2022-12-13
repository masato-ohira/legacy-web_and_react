// const { exec } = require('shelljs')
const live = require('shelljs-live')
const { config } = require('../package.json')

const methods = {
  'build.clear': () => {
    live([`rm -rf ${config.dist.assets}`].join(' && '))
    console.log({ clear: 'dist.assets' })
  },

  'build.vite': () => {
    live('tsc && vite build')
  },

  'build.pug': () => {
    live(
      [
        `pug ${config.src.pug}`,
        `--basedir ${config.src.pug}`,
        `--out ${config.dist.dir}`,
        `--pretty`,
        `-O pug.data.js`,
      ].join(' '),
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
