import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PostgresdbDataSource} from '../datasources';
import {Company, CompanyRelations, Devicemetadata} from '../models';
import {SensordataRepository} from './sensordata.repository';
import {FlowmeterdataRepository} from './flowmeterdata.repository';
import {DevicemetadataRepository} from './devicemetadata.repository';
import { Flowmeterdata } from '../models/flowmeterdata.model';
import { Sensordata } from '../models/sensordata.model';

export class CompanyRepository extends DefaultCrudRepository<
  Company,
  typeof Company.prototype.companyid,
  CompanyRelations
> {

  public readonly sensordata: HasManyRepositoryFactory<Sensordata, typeof Company.prototype.companyid>;

  public readonly flowmeterdata: HasManyRepositoryFactory<Flowmeterdata, typeof Company.prototype.companyid>;

  public readonly devicemetadata: HasManyRepositoryFactory<Devicemetadata, typeof Company.prototype.companyid>;

  FlowMeterData(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @inject('datasources.postgresdb') dataSource: PostgresdbDataSource, @repository.getter('SensordataRepository') protected sensordataRepositoryGetter: Getter<SensordataRepository>, @repository.getter('FlowmeterdataRepository') protected flowmeterdataRepositoryGetter: Getter<FlowmeterdataRepository>, @repository.getter('DevicemetadataRepository') protected devicemetadataRepositoryGetter: Getter<DevicemetadataRepository>,
  ) {
    super(Company, dataSource);
    this.devicemetadata = this.createHasManyRepositoryFactoryFor('devicemetadata', devicemetadataRepositoryGetter,);
    this.flowmeterdata = this.createHasManyRepositoryFactoryFor('flowmeterdata', flowmeterdataRepositoryGetter,);
    this.sensordata = this.createHasManyRepositoryFactoryFor('sensordata', sensordataRepositoryGetter,);
  }
}
