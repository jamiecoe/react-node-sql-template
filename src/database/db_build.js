const path = require('path');
const { QueryFile } = require('pg-promise');
const db = require('./db_connections');

const sql = file => QueryFile(path.join(__dirname, file), { minify: true });

const build = sql('./db_build.sql');

const runDbBuild = () => {
  db
    .query(build)
    .then(res => console.log('res', res))
    .catch(e => console.error('error', e));
};

module.exports = runDbBuild;
