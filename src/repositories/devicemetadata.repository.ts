import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresdbDataSource} from '../datasources';
import {Devicemetadata, DevicemetadataRelations} from '../models';

export class DevicemetadataRepository extends DefaultCrudRepository<
  Devicemetadata,
  typeof Devicemetadata.prototype.deviceid,
  DevicemetadataRelations
> {
  constructor(
    @inject('datasources.postgresdb') dataSource: PostgresdbDataSource,
  ) {
    super(Devicemetadata, dataSource);
  }
}
