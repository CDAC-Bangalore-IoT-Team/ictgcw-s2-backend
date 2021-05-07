import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  BelongsToAccessor,
} from '@loopback/repository';
import {PostgresdbDataSource} from '../datasources';
import {Company} from '../models';
import {Sensordata, SensordataRelations} from '../models/sensordata.model';
import {CompanyRepository} from './company.repository';

export class SensordataRepository extends DefaultCrudRepository<
  Sensordata,
  typeof Sensordata.prototype.deviceid,
  SensordataRelations
> {
  public readonly companyId: BelongsToAccessor<
    Company,
    typeof Sensordata.prototype.deviceid
  >;

  constructor(
    @inject('datasources.postgresdb') dataSource: PostgresdbDataSource,
    @repository.getter('CompanyRepository')
    protected companyRepositoryGetter: Getter<CompanyRepository>,
  ) {
    super(Sensordata, dataSource);
    this.companyId = this.createBelongsToAccessorFor(
      'companyId',
      companyRepositoryGetter,
    );
    this.registerInclusionResolver(
      'companyId',
      this.companyId.inclusionResolver,
    );
  }
}
