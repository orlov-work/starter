import fs from 'fs';
import path from 'path';
import { appDir } from '../utils';

/**
 * apply modules
 * @param app
 * @param pathToModules
 * @param prefix
 */
export default function(app, pathToModules, prefix = null) {
  const fullPath = path.resolve(appDir, pathToModules);

  fs.readdirSync(fullPath).forEach(moduleName => {
    if (moduleName[0] === '.') return;

    const route = prefix ? `/${prefix}/${moduleName}` : `/${moduleName}`;

    app.use(route, require(`${fullPath}/${moduleName}/router`).default);
  });
}
