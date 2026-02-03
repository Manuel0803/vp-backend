const path = require('path');

module.exports = ({ env }) => {
  const isProd = env('NODE_ENV') === 'production';

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'vp_db'),
        user: env('DATABASE_USERNAME', 'vp_user'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: env.bool('DATABASE_SSL', false) && {
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: 2, max: 10 },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client: isProd ? 'postgres' : 'sqlite',
      ...(isProd ? connections.postgres : connections.sqlite),
      acquireConnectionTimeout: 60000,
    },
  };
};
