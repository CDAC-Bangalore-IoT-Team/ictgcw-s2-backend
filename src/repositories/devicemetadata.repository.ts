import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {PostgresdbDataSource} from '../datasources';
import {
  Devicemetadata,
  DevicemetadataRelations,
} from '../models/devicemetadata.model';

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
