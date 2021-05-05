import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresdbDataSource} from '../datasources';
import {
  Flowmeterdata,
  FlowmeterdataRelations,
} from '../models/flowmeterdata.model';

export class FlowmeterdataRepository extends DefaultCrudRepository<
  Flowmeterdata,
  typeof Flowmeterdata.prototype.deviceid,
  FlowmeterdataRelations
> {
  constructor(
    @inject('datasources.postgresdb') dataSource: PostgresdbDataSource,
  ) {
    super(Flowmeterdata, dataSource);
  }
}
