import 'colors';
import fs from 'fs';
import mkdirp from 'mkdirp';
import { camelCase, upperFirst } from 'lodash';
import {
  controllerTemplate,
  modelTemplate,
  routerTemplate,
  schemaTemplate
} from './templates';

const projectDir = process.cwd();
const argument = upperFirst(camelCase(process.argv[2]));
const path = `${projectDir}/src/api/${argument}`;
const done = [];

const controller = `${path}/controller.js`;
const model = `${path}/model.js`;
const router = `${path}/router.js`;
const schema = `${path}/schema.js`;

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

    if (done.length === 4) {
      console.log(`Component ${`${argument}`.cyan} generated ${'successfuly.'.green}`);
    } else {
      console.log(`${'Oops... Something wrong.'.red} Component not created.`);
    }

    return true;
  });
}
