const TypedVueGenerator = require('./generator')

module.exports = class extends TypedVueGenerator {
  // note: arguments and options should be defined in the constructor.
  // constructor(args, opts) {
  //   super(args, opts)

  //   // This makes `appname` a required argument.
  //   this.argument('appname', { 'type': String })

  //   // And you can then access it later; e.g.
  //   this.log(this.options.appname)
  // }

  async prompting() {
    this.answers = await this.prompt([
      {
        'type': 'input',
        'name': 'name',
        'message': 'Name a new component',
        'default': 'TypedComponent', // Default to current folder name
      },
      {
        'type': 'confirm',
        'name': 'test',
        'message': 'Would you like to also create a test?',
      },
    ])
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('TemplateComponent.vue'),
      this.destinationPath(`client/components/${this.capitalizeFirstLetter(this.answers.name)}.vue`),
      { 'name': this.answers.name },
    )

    if (this.answers.test) {
      this.fs.copyTpl(
        this.templatePath('template.spec.ts'),
        this.destinationPath(`tests/components/${this.camelToKebab(this.answers.name)}.spec.ts`),
        { 'name': this.answers.name },
      )
    }
  }
}
