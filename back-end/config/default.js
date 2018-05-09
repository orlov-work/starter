const {
  PORT,
  ORACLE_USER,
  ORACLE_PASSWORD,
  ORACLE_HOST,
  ORACLE_PORT,
  ORACLE_SID
} = process.env;

module.exports = {
  port: process.env.PORT,
  oracle: {
    user: ORACLE_USER,
    password: ORACLE_PASSWORD,
    connectString: `${ORACLE_HOST}:${ORACLE_PORT}/${ORACLE_SID}`
  }
};
