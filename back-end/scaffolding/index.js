import 'colors';
import fs from 'fs';
import mkdirp from 'mkdirp';
import {
  controllerTemplate,
  modelTemplate,
  routerTemplate,
  schemaTemplate,
  interfaceTemplate
} from './templates';

const appDir = process.cwd();
const argument = process.argv[2];
const path = `${appDir}/src/testGen/${argument}`;
const done = [];

const controller = `${path}/controller.ts`;
const model = `${path}/model.ts`;
const router = `${path}/router.ts`;
const schema = `${path}/schema.ts`;
const _interface = `${path}/interface.ts`;

const isDirExists = fs.existsSync(path);

/**
 * create file for
 * @param component
 * @param template
 */
const createFile = (component, template) => {
  fs.openSync(component, 'w');
  fs.writeFile(component, template(argument));
  fs.closeSync(fs.openSync(component, 'w'));
  if (fs.existsSync(component)) done.push(true);
};

if (isDirExists) {
  console.log(`Component ${`${argument}`.cyan} already ${'exists'.red}`);
} else {
  mkdirp(path, err => {
    if (err) return console.error(err);

    createFile(controller, controllerTemplate);
    createFile(model, modelTemplate);
    createFile(router, routerTemplate);
    createFile(schema, schemaTemplate);
    createFile(_interface, interfaceTemplate);

    if (done.length === 5) {
      console.log(`Component ${`${argument}`.cyan} generated ${'successfuly.'.green}`);
    } else {
      console.log(`${'Oops... Something wrong.'.red} Component not created.`);
    }

    return true;
  });
}

