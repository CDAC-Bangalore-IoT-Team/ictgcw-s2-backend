import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'postgresdb',
  connector: 'postgresql',
  url: 'postgres://postgres:makuadhi101131@localhost:5432/ictgcw',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'makuadhi101131',
  database: 'ictgcw'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PostgresdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'postgresdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.postgresdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
