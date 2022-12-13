const browser = require('browser-sync')
const ssi = require('connect-ssi')
const { config } = require('../package.json')

const methods = {
  'dev.server': () => {
    browser({
      files: [`${config.dist.dir}**/*.html`],
      server: config.dist.dir,
      directory: true,
      open: false,
      port: config.port.app,
      startPath: config.site.path,
      ghostMode: false,
      notify: false,

      // proxyを利用するcase
      // files: [`${config.dist.dir}**/*.php`],
      // startPath: config.site.path,
      // open: false,
      // proxy: `localhost:${config.port.php}`,
      // hostname: 'localhost',
      // port: config.port.app,
    })
  },

  preview: () => {
    browser({
      server: config.dist.dir,
      directory: true,
      open: false,
      port: config.port.app,
      startPath: config.site.path,
      ghostMode: false,
      notify: false,

      middleware: [
        ssi({
          baseDir: config.dist.dir,
          ext: '.html',
        }),
      ],
    })
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
