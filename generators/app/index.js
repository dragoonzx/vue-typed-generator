"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
class X extends generator_1.TypedVueGenerator {
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            this.answers = yield this.prompt([
                {
                    'type': 'input',
                    'name': 'name',
                    'message': 'Name a new component',
                    'default': 'TypedComponent',
                },
                {
                    'type': 'confirm',
                    'name': 'test',
                    'message': 'Would you like to also create a test?',
                },
            ]);
        });
    }
    writing() {
        this.fs.copyTpl(this.templatePath('TemplateComponent.vue'), this.destinationPath(`client/components/${this.capitalizeFirstLetter(this.answers.name)}.vue`), { 'name': this.answers.name });
        if (this.answers.test) {
            this.fs.copyTpl(this.templatePath('template.spec.ts'), this.destinationPath(`tests/components/${this.camelToKebab(this.answers.name)}.spec.ts`), { 'name': this.answers.name });
        }
    }
}
exports.default = X;
