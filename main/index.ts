import { TypedVueGenerator } from './generator'

export default class X extends TypedVueGenerator {
  answers: any;

  public async prompting() {
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

  public writing() {
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
