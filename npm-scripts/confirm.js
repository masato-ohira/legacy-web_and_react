const methods = {
  'confirm.msg': () => {
    if (process.env.M) {
      return true
    } else {
      console.error('commitメッセージは必須です')
      process.exit(1)
    }
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
