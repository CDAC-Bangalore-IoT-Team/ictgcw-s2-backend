import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresdbDataSource} from '../datasources';
import {Sensordata, SensordataRelations} from '../models/sensordata.model';

export class SensordataRepository extends DefaultCrudRepository<
  Sensordata,
  typeof Sensordata.prototype.deviceid,
  SensordataRelations
> {
  constructor(
    @inject('datasources.postgresdb') dataSource: PostgresdbDataSource,
  ) {
    super(Sensordata, dataSource);
  }
}
