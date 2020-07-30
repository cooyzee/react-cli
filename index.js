#!/usr/bin/env node

const program = require('commander')
const process1 = require('child_process')

//version 版本号
//name 新项目名称
program.version(require('./package.json').version, '-v, --version')
  .command('init <name>')
  .action((name) => {
    console.log('clone template ...')
    process1.exec('git clone https://github.com/cooyzee/react-tpl.git ' + name, function(error, stdout, stderr) {
      if (error !== null) {
        console.log('exec error: ' + error)
        return
      }
      console.log(stdout)
      console.log('clone success')
    })
  })

program.parse(process.argv)

if (!program.args.length) {
  program.help()
}
