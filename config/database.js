// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'ec2-44-208-88-195.compute-1.amazonaws.com'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'd6js5ser8s4cue'),
//       user: env('DATABASE_USERNAME', 'xfecdurlsugtag'),
//       password: env('DATABASE_PASSWORD', '5298e817ef9d2940874485a48f76fd78349bca4352d4ac5e859ee1bdb7257701'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//       },
//     },
//     /// add line
//     options: {
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'postgres-925e8277-475b-4a14-861d-c3a26fd80017.cqryblsdrbcs.us-east-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 4495),
      database: env('DATABASE_NAME', 'DZViNKGjBqdL'),
      user: env('DATABASE_USERNAME', '74fd63a71678'),
      password: env('DATABASE_PASSWORD', '37290121c155'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    /// add line
    options: {
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
