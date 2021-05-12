import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {PostgresdbDataSource} from '../datasources';
import {
  Company,
  CompanyRelations,
  Devicemetadata,
} from '../models';
import { Flowmeterdata } from '../models/flowmeterdata.model';
import { Sensordata } from '../models/sensordata.model';
import {DevicemetadataRepository} from './devicemetadata.repository';
import {FlowmeterdataRepository} from './flowmeterdata.repository';
import {SensordataRepository} from './sensordata.repository';

export class CompanyRepository extends DefaultCrudRepository<
  Company,
  typeof Company.prototype.companyid,
  CompanyRelations
> {
  public readonly devicemetadata: HasManyRepositoryFactory<
    Devicemetadata,
    typeof Company.prototype.companyid
  >;

  public readonly flowmeterdata: HasManyRepositoryFactory<
    Flowmeterdata,
    typeof Company.prototype.companyid
  >;

  public readonly sensordata: HasManyRepositoryFactory<
    Sensordata,
    typeof Company.prototype.companyid
  >;

  constructor(
    @inject('datasources.postgresdb') dataSource: PostgresdbDataSource,
    @repository.getter('DevicemetadataRepository')
    protected devicemetadataRepositoryGetter: Getter<DevicemetadataRepository>,
    @repository.getter('FlowmeterdataRepository')
    protected flowmeterdataRepositoryGetter: Getter<FlowmeterdataRepository>,
    @repository.getter('SensordataRepository')
    protected sensordataRepositoryGetter: Getter<SensordataRepository>,
  ) {
    super(Company, dataSource);
    this.sensordata = this.createHasManyRepositoryFactoryFor(
      'sensordata',
      sensordataRepositoryGetter,
    );
    this.flowmeterdata = this.createHasManyRepositoryFactoryFor(
      'flowmeterdata',
      flowmeterdataRepositoryGetter,
    );
    this.devicemetadata = this.createHasManyRepositoryFactoryFor(
      'devicemetadata',
      devicemetadataRepositoryGetter,
    );
  }
}
