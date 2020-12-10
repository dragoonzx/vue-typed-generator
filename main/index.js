const yeoman = require('yeoman-environment')
const env = yeoman.createEnv()

env.register(require.resolve('generator-vue-typed-generator'))
