const fs = require('fs');
const path = require('path');
const parser = require('babyparse');

module.exports = target => {
  const file = fs.readFileSync(path.join(__dirname, `${target}.csv`), 'utf-8');
  const result = parser.parse(file, {
    header: true,
    delimiter: ','
  });

  return result.data;
};
